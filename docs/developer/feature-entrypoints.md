# 功能开发入口

想改功能时先来这页查入口。不要一上来全局搜中文文案然后就改，因为很多功能的真正动作在 `ClickConfig`、`CodeString`、assets 脚本和 Activity 之间分了几段。

## 常用功能

| 功能 | 入口类 |
| --- | --- |
| 切换源 | `SwitchSourceClickConfig.java` |
| 容器切换 | `ContainerSwitchClickConfig.java` |
| 备份/恢复 | `BackupRestoreClickConfig.java`、`BackupFragment.java`、`RestoreFragment.java` |
| MOE 全能 | `MoeClickConfig.java` |
| 发行版本 | `ReleaseLinuxVersionClickConfig.java` |
| QEMU | `QEMUClickConfig.java`、`utermux_windows/qemu/` |
| ZT 设置 | `ZTSettingsClickConfig.java`、`ZeroTermuxSettingsActivity.kt` |

## X11 功能

| 功能 | 入口类 |
| --- | --- |
| X11 设置 | `X11SettingsClickConfig.java`、`ZeroTermuxX11Settings.java` |
| 显示/隐藏终端 | `ShowCommandClickConfig.java`、`HideCommandClickConfig.java` |
| X11 环境 | `X11EnvironmentClickConfig.java` |
| 修复环境错误 | `FixEnvironmentalErrorClickConfig.java` |
| 安装 X11 | `InstallX11ClickConfig.java` |
| 显示/隐藏键盘 | `ShowX11KeyboardClickConfig.java`、`HideX11KeyboardClickConfig.java` |
| VNC | `VNCClickConfig.java` |

## 美化和 UI

| 功能 | 入口类 |
| --- | --- |
| 悬浮窗口 | `FloatWindowsClickConfig.java` |
| 美化设置 | `BeautificationSettingsClickConfig.java`、`BeautifySettingDialog.kt` |
| 字体设置 | `FontSettingsClickConfig.java`、`FontActivity.java` |
| 全屏模式 | `FullScreenClickConfig.java` |
| 雪花动画 | `SnowflakeClickConfig.java` |
| 粒子动画 | `ParticleClickConfig.java` |
| 视频背景 | `WebDataClickConfigImp.kt`、`VideoBackClickConfig.java` |
| 清除样式 | `ClearStyleClickConfig.kt` |

## 线上功能

| 功能 | 入口类 |
| --- | --- |
| 在线脚本 | `OnLineCommandClickConfig.java` |
| Zero 论坛 | `ZeroBBsClickConfig.java` |
| 下载站 | `DownLoadClickConfig.java` |
| 公共仓库 | `PublicWarehouseClickConfig.java` |

## 配置终端

| 功能 | 入口类 |
| --- | --- |
| ADB Shell 运行 | `AdbShellRunClickConfig.kt` |
| 底部键盘 | `ZTCommandKeyClickConfig.kt` |
| 默认 Bash | `DefBashClickConfig.kt` |
| 修改 Bash | `ChangBashClickConfig.kt` |
| 修改启动信息 | `ChangStartMsgClickConfig.kt` |
| 命令定义 | `CommandDefinitionCLickConfig.java` |
| 开机启动 | `BootCommandClickConfig.java` |

## ZT 功能

| 功能 | 入口类 |
| --- | --- |
| 模块安装 | `InstallModuleClickConfig.kt` |
| FTP | `FtpDataClickConfig.kt`、`ftp/` |
| 常用软链接 | `CommonlyUsedSoftLinksDataClickConfig.kt` |
| 我的软链接 | `MyUsedSoftLinksDataClickConfig.kt` |
| 卸载 | `UnInstallClickConfig.kt` |
| 远程连接 | `RemoteConnectionClickConfig.kt` |
| Web 数据 | `WebDataClickConfig.kt` |
| 短信/通讯录 | `PhoneSmsClickConfig.java` |
| 定时任务 | `ScheduledTaskClickConfig.java`、`TimerActivity.kt`、`TimerExeService.kt` |
| 打开目录 | `OpenPathClickConfig.java` |
| 数据信息 | `DataMessageClickConfig.kt` |
| 语言切换 | `LanguageClickConfig.java` |
| GitHub | `GitHubClickConfig.java` |

## 改功能时的路线

1. 先在 `MainMenuConfig.java` 找功能注册位置。
2. 打开对应 `ClickConfig` 看点击后启动 Activity、弹窗还是发送命令。
3. 如果写入 assets，继续找 `UUtils.writerFile(...)` 的资源路径。
4. 如果发送终端命令，找 `CodeString` 中对应命令字符串。
5. 如果涉及路径，查 `FileUrl.kt`。
6. 如果涉及文案，查 `values-zh-rCN/strings.xml`。
7. 如果涉及权限，查 Manifest 和对应运行时权限申请。
8. 改完后按用户实际点击路径验证，不要只验证某个类能编译。
