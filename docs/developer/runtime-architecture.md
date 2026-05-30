# 运行架构

这页不是画漂亮架构图用的，主要是帮你判断一个功能到底该放在哪一层。ZeroTermux 里很多问题不是“不会写代码”，而是把 Android 侧、终端侧、assets 脚本和外部存储混着改。

## 启动链路

应用入口在 `AndroidManifest.xml` 中配置为：

```text
com.termux.zerocore.guide.TermuxGuideActivity
```

也就是说，启动器图标首先进入 ZeroTermux 的引导页，而不是原版 Termux 的 `TermuxActivity`。

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

它负责维护终端会话、运行 Shell、管理前台服务通知等。多数功能如果要“向终端输入命令”，不应该自己新开进程，而是通过现有通信工具把命令发送到当前会话。

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

首次引导会创建该目录。如果开发时清数据、重装或卸载后发现功能失效，先确认目录和权限，而不是直接怀疑功能代码。

## 修改建议

- 改启动流程：先看 `guide/` 和 Manifest，不要直接把 Launcher 切回 `TermuxActivity`。
- 改终端主界面：先搜索 `TermuxActivity` 中对应 UI 或回调，不要直接重写生命周期。
- 改后台执行：先看 `TermuxService`、`RunCommandService`、`TimerExeService`。
- 改菜单入口：先看 `MainMenuConfig`，顺着 `ClickConfig` 追。
- 改终端命令：先看 `ZTCommandConfigStore`，别只改 shell 脚本。
