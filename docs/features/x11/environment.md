# X11 环境

X11 环境页面用于帮助配置图形应用运行所需的基础组件。

## 入口

```text
X11 功能 > X11环境
```

## 基本流程

1. 安装或修复 X11 通道。
2. 在 Termux 环境中安装桌面环境或图形应用。
3. 启动 X11。
4. 在终端中运行图形程序。

常见图形程序示例：

```bash
pkg install x11-repo
pkg install xterm
xterm
```

## 排查方向

- 图形应用提示找不到显示：确认 `DISPLAY` 变量和 X11 会话状态。
- X11 组件缺失：进入 [安装 X11](/features/x11/install) 重新安装。
- 通道状态异常：执行 `zt x11status`。
