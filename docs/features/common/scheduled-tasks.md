# 定时任务

ZeroTermux 提供“定时任务”入口，用于管理定时执行的 Termux 或 Shell 脚本。

## 入口

```text
ZT 功能 > 定时任务
```

源码中的定时任务文件路径如下：

| 路径 | 说明 |
| --- | --- |
| `~/.timerdir/termux_timer.sh` | Termux 定时任务脚本 |
| `~/.timerdir/shell_timer.sh` | Shell 定时任务脚本 |
| `~/.timerdir/log/` | 定时任务日志目录 |
| `/data/data/com.termux/files/execTermuxEnv.sh` | 执行 Termux 环境的辅助脚本 |

## 使用建议

1. 先手动运行一次脚本，确认命令本身没有错误。
2. 再放入定时任务，避免把路径、权限、环境变量问题混在一起排查。
3. 需要写文件时优先使用绝对路径。
4. 任务执行失败时先查看日志目录。

## 常见问题

### 后台不执行

Android 对后台进程限制较多。建议给 ZeroTermux 关闭电池优化，并允许后台运行。

### 命令在终端能运行，定时任务不能运行

通常是环境变量或工作目录不同。把命令改成完整路径，例如：

```bash
/data/data/com.termux/files/usr/bin/python /data/data/com.termux/files/home/task.py
```
