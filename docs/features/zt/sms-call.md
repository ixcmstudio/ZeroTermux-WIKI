# 短信/通讯录工具

ZeroTermux 提供短信和通讯录读取工具入口。该功能涉及敏感权限，使用前请确认风险。

## 入口

```text
ZT 功能 > 短信/通话
```

## 命令

安装完成后可使用：

```bash
smsread
readcontacts
```

对应文件路径：

| 文件 | 说明 |
| --- | --- |
| `$PREFIX/usr/bin/smsread` | 短信读取工具 |
| `$PREFIX/usr/bin/readcontacts` | 通讯录读取工具 |
| `~/sms.txt` | 短信输出文件 |
| `~/phone.txt` | 通讯录输出文件 |

:::danger 权限提醒
短信和通讯录属于敏感数据。仅在明确需要时安装并授予权限，不使用时建议关闭相关权限。
:::
