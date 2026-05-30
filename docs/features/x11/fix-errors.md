# 修复 X11 环境错误

当 X11 无法启动、组件缺失或通道状态异常时，可以先使用 ZeroTermux 的修复入口。

## 入口

```text
X11 功能 > 修复环境错误
```

## 适用情况

- X11 启动后黑屏。
- 菜单里的显示/隐藏终端无效。
- `termux-x11` 相关文件缺失。
- 图形应用提示无法连接显示。

## 手动检查

在终端中可以检查这些文件是否存在：

```bash
ls $PREFIX/usr/bin/termux-x11
ls $PREFIX/usr/bin/termux-x11-preference
ls $PREFIX/usr/libexec/termux-x11/loader.apk
ls $PREFIX/usr/lib/libXlorie.so
```

如果缺失，优先使用“安装X11”或“修复环境错误”入口恢复。

## 仍然失败

1. 重启 ZeroTermux。
2. 重新安装 X11 组件。
3. 切换软件源后更新包。
4. 截图错误信息反馈给项目维护者。
