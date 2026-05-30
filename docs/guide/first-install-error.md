# 首次启动与故障排除

ZeroTermux 首次启动会安装基础环境并创建运行所需目录。如果启动失败、一直停在安装界面，或左/右菜单无法正常使用，可以按本页逐项检查。

## 首次启动流程

1. 安装 APK 后首次打开 ZeroTermux。
2. 按引导选择使用习惯。Termux 使用习惯更接近原版按键逻辑，ZeroTermux 使用习惯会启用边缘双击或音量键唤出左右菜单。
3. 授予内部存储权限。
4. 选择创建数据目录。推荐使用“内部存储”方案。
5. 等待基础环境安装完成，不要切到后台或清理进程。

## 目录创建失败

ZeroTermux 默认会在内部存储创建 `xinhao` 目录，常见子目录包括：

| 目录 | 用途 |
| --- | --- |
| `/sdcard/xinhao/data/` | 备份包、恢复包 |
| `/sdcard/xinhao/apk/` | 临时 APK |
| `/sdcard/xinhao/command/` | 自定义命令 |
| `/sdcard/xinhao/font/` | 字体文件 |
| `/sdcard/xinhao/iso/` | ISO 镜像 |
| `/sdcard/xinhao/qemu/` | QEMU 文件 |
| `/sdcard/xinhao/server/` | 服务相关文件 |
| `/sdcard/xinhao/share/` | 分享与临时文件 |
| `/sdcard/xinhao/web_config/` | Web 配置 |

如果提示未创建成功，请到系统设置中确认 ZeroTermux 已获得文件和媒体权限，然后重新打开应用。

:::warning 注意
不建议把主要数据放到 `Android/data` 路径。卸载应用或系统清理时，里面的数据更容易被一起删除。
:::

## Bootstrap 安装失败

如果提示无法安装引导程序，通常与以下情况有关：

- 安装过程中应用被切到后台或被系统清理。
- 手机空间不足。
- 当前不是 Android 主用户。
- 旧版 Termux、ZeroTermux 或同签名应用残留导致安装目录冲突。

处理方式：

1. 确认内部存储有足够空间。
2. 完全卸载旧版 Termux/ZeroTermux 后重新安装。
3. 首次启动期间保持应用在前台。
4. 如仍失败，截图错误信息并到项目或社群反馈。

## 左右菜单打不开

ZeroTermux 的菜单行为与“使用习惯”设置有关：

- 选择 Termux 使用习惯时，按键更接近原版 Termux。
- 选择 ZeroTermux 使用习惯时，音量键或屏幕边缘操作会用于唤出左右菜单。

如果菜单不符合预期，可以进入左侧栏的 ZT 设置重新调整使用习惯。

## 终端环境异常

遇到 `pkg update` 报错、源不可用或基础命令缺失时，先按顺序尝试：

```bash
pkg update
pkg upgrade
```

如果软件源连接慢或失败，请进入 [切换源](/features/common/source-switching) 页面按地区切换清华源、北京源或官方源。

