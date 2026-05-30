# 安装 X11

ZeroTermux 内置了 X11 相关资源，用于更方便地运行图形应用。

## 入口

```text
X11 功能 > 安装X11
```

## 安装前准备

1. 完成 ZeroTermux 首次启动。
2. 确保网络可用。
3. 确保软件源可用。
4. 保持应用在前台。

## 安装后验证

可以通过命令检查状态：

```bash
zt x11status
```

也可以安装一个简单图形程序测试：

```bash
pkg install x11-repo
pkg install xterm
xterm
```

## 相关功能

- [X11 设置](/features/x11/settings)
- [显示/隐藏终端](/features/x11/toggle-terminal)
- [显示/隐藏键盘](/features/x11/toggle-keyboard)
- [修复环境错误](/features/x11/fix-errors)
