# 命令定义与 `zt` 命令

ZeroTermux 提供“命令定义”菜单，也内置了 `zt` 命令，用于从终端触发应用侧功能。

## 菜单入口

```text
配置终端 > 命令定义
```

自定义命令配置文件会放在：

```text
/sdcard/xinhao/command/
```

## `zt` 基础命令

| 命令 | 说明 |
| --- | --- |
| `zt help` | 查看帮助 |
| `zt version` / `zt v` | 查看 ZeroTermux 命令版本 |
| `zt toast 内容` | 显示 Toast |
| `zt openleft` / `zt ol` | 打开左侧栏 |
| `zt openright` / `zt or` | 打开右侧栏 |
| `zt reboot` / `zt rb` | 重启 Termux 环境 |
| `zt qr` | 打开扫一扫 |

## 弹窗命令

```bash
zt dialog -c -t 标题 -m 消息内容
zt dialog -s -m 消息内容
zt dialog -e -t 标题
```

参数说明：

| 参数 | 说明 |
| --- | --- |
| `-c` | 确定/取消弹窗 |
| `-s` | 只有确定按钮的显示弹窗 |
| `-e` | 编辑弹窗 |
| `-t` | 标题 |
| `-m` | 消息内容 |

## X11 相关命令

```bash
zt x11status
zt x11commandshow
zt x11commandhide
zt x11keyboardshow
zt x11keyboardhide
```

短命令：

```bash
zt x11xs
zt x11xh
zt x11kbs
zt x11kbh
```

## 创建软链接

```bash
zt ln /data/data/com.termux/files/home/自定义名称 /sdcard/
zt ln /data/data/com.termux/files/home/自定义名称 /sdcard/自定义目录/
```

两个路径都建议使用完整路径。

## 背景图片

```bash
zt backgroundimage /data/data/com.termux/files/home/.img/back.jpg
zt bgi /data/data/com.termux/files/home/.img/back.jpg
```

路径必须指向有效图片。
