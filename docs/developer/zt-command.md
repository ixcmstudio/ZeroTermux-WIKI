# `zt` 命令系统

`zt` 是终端侧和 Android 侧之间的通道。终端里执行 `zt xxx` 后，可能会打开 Android 弹窗、控制 X11、调用 VNC，或者让主界面执行动作。

## 核心文件

| 文件 | 说明 |
| --- | --- |
| `ZTSocketService.java` | 命令服务，接收并分发请求 |
| `ZTCommandConfigStore.java` | 命令注册表 |
| `ZTKeyConstants.java` | 命令字符串和 ID 常量 |
| `ZTConfig.java` | 命令处理接口 |
| `assets/runcommand/zt` | 终端侧 `zt` 命令脚本 |

## 已有命令

| 命令 | 短命令 | 说明 |
| --- | --- | --- |
| `help` |  | 查看帮助 |
| `version` | `v` | 查看命令版本 |
| `toast` |  | 显示 Toast |
| `openleft` | `ol` | 打开左侧栏 |
| `openright` | `or` | 打开右侧栏 |
| `reboot` | `rb` | 重启 Termux |
| `ln` |  | 创建软链接 |
| `vnc` |  | 打开 VNC |
| `x11commandshow` | `x11xs` | 显示 X11 终端 |
| `x11commandhide` | `x11xh` | 隐藏 X11 终端 |
| `x11status` |  | 查询 X11 状态 |
| `x11keyboardshow` | `x11kbs` | 显示 X11 键盘 |
| `x11keyboardhide` | `x11kbh` | 隐藏 X11 键盘 |
| `dialog` |  | 显示弹窗 |
| `qr` |  | 打开扫一扫 |
| `backgroundimage` | `bgi` | 设置背景图片 |
| `menu` |  | 更新或重置 XML 菜单 |

## 新增命令步骤

### 1. 增加常量

在 `ZTKeyConstants.java` 中添加 ID 和命令字符串：

```java
public static final int ZT_ID_EXAMPLE = 18;
public static final String ZT_COMMAND_EXAMPLE = "example";
```

如果需要短命令，也加一个：

```java
public static final String ZT_COMMAND_EXAMPLE_1 = "ex";
```

### 2. 实现配置类

在 `config/ztcommand/config/` 下新增类，实现 `ZTConfig`。

通常需要提供：

- 命令 ID。
- 是否转发。
- 命令处理逻辑。
- 返回给终端的文本或 JSON。

可以参考：

```text
ToastConfig.java
VersionConfig.java
ConfirmedDialogConfig.java
ZTBackgroundImageConfig.java
XmlMenuConfig.java
```

### 3. 注册命令

在 `ZTCommandConfigStore.java` 中注册字符串到 ID：

```java
map_array_command.put(ZTKeyConstants.ZT_COMMAND_EXAMPLE, ZTKeyConstants.ZT_ID_EXAMPLE);
map_array_command.put(ZTKeyConstants.ZT_COMMAND_EXAMPLE_1, ZTKeyConstants.ZT_ID_EXAMPLE);
```

再注册实现：

```java
register(new ExampleConfig());
```

### 4. 更新帮助文本

帮助文本在中文资源里：

```text
app/src/main/res/values-zh-rCN/strings.xml
```

搜索：

```text
zt_command_help
```

把新命令的用法写进去。

### 5. 测试

安装新版 APK 后，在终端执行：

```bash
zt help
zt example
zt ex
```

如果提示“不支持或ZT版本低不识别”，说明命令没有注册成功，优先检查 `ZTCommandConfigStore`。

## 常见问题

- 只写了 `ZTConfig`，忘了在 `ZTCommandConfigStore` 注册。
- 注册了长命令，忘了注册短命令。
- 更新了 Java 常量，忘了更新帮助文案。
- 命令需要 Activity 上下文，但服务侧没有可用 UI 上下文。
- 命令参数里包含空格，解析逻辑没有处理好。
- 改完 APK 但没有确认 `$PREFIX/usr/bin/zt` 是否已经更新。
- 只在 Java 里测试，没有真的到终端里敲命令。
