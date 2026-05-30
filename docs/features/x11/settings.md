# X11 设置

X11 设置用于管理 ZeroTermux 内置 X11 通道的偏好项。项目中包含 `termux-x11`、`termux-x11-preference` 和相关 AAR，用于在应用内启动图形环境。

## 入口

```text
X11 功能 > X11设置
```

## 相关文件

| 文件 | 说明 |
| --- | --- |
| `$PREFIX/usr/bin/termux-x11` | X11 启动脚本 |
| `$PREFIX/usr/bin/termux-x11-preference` | X11 偏好设置脚本 |
| `$PREFIX/usr/libexec/termux-x11/loader.apk` | X11 loader APK |
| `$PREFIX/usr/lib/libXlorie.so` | X11 相关库 |

## 使用建议

- 首次使用前先完成 [安装 X11](/features/x11/install)。
- 修改设置后，如果图形界面没有变化，请重启 X11 会话。
- 如果环境损坏，先使用 [修复环境错误](/features/x11/fix-errors)。
