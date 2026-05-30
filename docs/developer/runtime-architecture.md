# 运行架构

这页用于判断功能属于哪一层：Android 侧、终端侧、assets 脚本、外部存储，还是 Termux 原有能力。改动前先把层次分清楚。

## 启动链路

应用入口在 `AndroidManifest.xml` 中配置为：

```text
com.termux.zerocore.guide.TermuxGuideActivity
```

启动器图标首先进入 ZeroTermux 的引导页，之后再进入 `TermuxActivity`。

典型流程：

```text
TermuxGuideActivity
  -> 首次协议、使用习惯、目录创建、基础环境安装
  -> TermuxActivity
  -> TermuxService
  -> TerminalSession
  -> TerminalView
```

## 主界面

主终端界面是：

```text
app/src/main/java/com/termux/app/TermuxActivity.java
```

它仍然继承自 AppCompatActivity，并绑定 `TermuxService`。ZeroTermux 在这里增加了：

- 左右菜单和滑动手势。
- 双击行为。
- 背景图片、视频背景、动画等 UI 扩展。
- 与 `zerocore` 菜单配置的连接。
- AI 侧栏、文件、FTP、X11 等功能入口。
- `SingletonCommunicationUtils` 通信回调，用于让菜单项向终端发送文本。

## 终端服务

核心服务是：

```text
app/src/main/java/com/termux/app/TermuxService.java
```

它负责维护终端会话、运行 Shell、管理前台服务通知等。功能需要向终端输入命令时，优先通过现有通信工具发送到当前会话。

常见调用方式可在菜单项里看到：

```java
SingletonCommunicationUtils.getInstance()
    .getmSingletonCommunicationListener()
    .sendTextToTerminal("命令\n");
```

## 终端显示

终端显示由两个模块配合：

| 模块 | 负责内容 |
| --- | --- |
| `terminal-emulator` | 终端协议、屏幕缓冲、控制序列、会话数据 |
| `terminal-view` | Android View、渲染、选择、手势、输入 |

如果只是新增功能菜单，一般不需要改这两个模块。只有在修终端渲染、按键、选择、控制序列时才进入它们。

## ZeroTermux 扩展层

ZeroTermux 自己的大多数代码都集中在：

```text
app/src/main/java/com/termux/zerocore/
```

核心设计是“功能入口分散，主框架集中”：

- `MainMenuConfig` 统一注册左侧菜单。
- 每个功能实现一个 `MainMenuClickConfig`。
- 具体 UI 放到 Activity、Dialog、Fragment 或 PopupWindow。
- 资源脚本放在 `assets`。
- 路径统一放在 `FileUrl.kt`。

## `zt` 命令链路

终端里的 `zt xxx` 命令最终会连接应用侧服务：

```text
终端脚本 zt
  -> ZTSocketService
  -> ZTCommandConfigStore
  -> 某个 ZTConfig 实现
  -> Activity / Service / Dialog / Terminal 回调
```

这套机制适合把“终端命令”映射为“Android 侧动作”，比如打开左右栏、显示弹窗、控制 X11、打开 VNC。

## 权限与目录

很多功能依赖 Android 权限和外部目录：

```text
/sdcard/xinhao/
```

首次引导会创建该目录。清数据、重装或卸载后功能失效时，先确认目录和权限。

## 修改入口

- 改启动流程：先看 `guide/` 和 Manifest。
- 改终端主界面：先搜索 `TermuxActivity` 中对应 UI 或回调。
- 改后台执行：先看 `TermuxService`、`RunCommandService`、`TimerExeService`。
- 改菜单入口：先看 `MainMenuConfig`，顺着 `ClickConfig` 追。
- 改终端命令：先看 `ZTCommandConfigStore`，同时检查 shell 脚本。
