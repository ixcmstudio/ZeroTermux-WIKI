# Linux 发行版

ZeroTermux 在常用功能中提供“发行版本”入口，用于写入并运行内置的 Linux 发行版安装工具。

## 入口

打开左侧栏，进入：

```text
常用功能 > 发行版本
```

点击后，应用会把内置的 `termux_linux_toolx.zip` 写入家目录，并向终端发送运行脚本。

## 使用流程

1. 确认 ZeroTermux 已经完成首次启动。
2. 打开“发行版本”功能。
3. 等待终端中出现脚本菜单或安装提示。
4. 按脚本提示选择需要的发行版，例如 Ubuntu、Kali 等。
5. 安装期间保持应用在前台，避免系统杀后台。

## 文件位置

安装工具会在 ZeroTermux 家目录下工作。与发行版、离线包相关的数据一般会使用这些目录：

| 目录 | 用途 |
| --- | --- |
| `/sdcard/xinhao/online_system/` | 离线 Termux/系统包 |
| `/sdcard/xinhao/data/` | 备份或恢复包 |
| `/sdcard/xinhao/system/` | 多系统相关数据 |

## 建议

- 初次使用时先安装一个系统，确认能正常启动后再折腾多个环境。
- 安装前尽量切换到稳定网络。
- 对重要环境先做 [备份](/features/common/backup-restore)，再升级或替换发行版。
