# QEMU

ZeroTermux 的 QEMU 功能用于在终端中辅助运行虚拟机脚本，并提供部分 Windows 镜像运行入口。

## 入口

```text
常用功能 > QEMU
```

当前菜单包含：

| 选项 | 说明 |
| --- | --- |
| 海的QEMU | 可选择线上脚本或写入本地脚本运行 |
| Zero | 打开 ZeroTermux 内置的运行窗口 |
| Win7模拟 | 写入 `qemu_win7.sh` 并发送运行命令 |
| WinXp | 写入 `qemu_winxp.sh` 并发送运行命令 |

## 目录

QEMU 相关文件主要放在：

```text
/sdcard/xinhao/qemu/
/sdcard/xinhao/windows/
/sdcard/xinhao/windows_config/
/sdcard/xinhao/share/
```

其中 `share` 目录常用于脚本运行时共享文件。首次运行 Win7/WinXP 入口时，应用会检查并创建该目录。

## 使用建议

1. 先确认已授予内部存储权限。
2. 把镜像、ISO 或共享文件放到对应目录。
3. 使用内置入口生成脚本后，在终端中观察输出。
4. 长时间无输出不一定是卡死，虚拟机启动和磁盘读写会比较慢。

:::warning 性能提醒
QEMU 对设备性能和散热要求较高。低内存设备建议使用轻量镜像，并避免同时运行多个重任务。
:::
