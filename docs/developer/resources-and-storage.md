# 资源与数据目录

ZeroTermux 会把 APK 里的脚本复制到 Termux 环境，也会读写 `/sdcard/xinhao` 和 `$PREFIX/usr/bin`。改涉及文件的功能时，先确认路径属于哪一类。

## 路径集中管理

重点文件：

```text
app/src/main/java/com/termux/zerocore/url/FileUrl.kt
```

这里集中定义了：

- Termux 内部目录。
- `$PREFIX` 下的 bin、etc、home。
- 外部存储 `/sdcard/xinhao`。
- X11、短信、定时任务、启动脚本路径。

改路径前优先看这里，尽量不要在功能代码里新增散落的硬编码。

## 内部目录

| 名称 | 路径 |
| --- | --- |
| Termux files | `/data/data/com.termux/files` |
| Home | `/data/data/com.termux/files/home` |
| Bin | `/data/data/com.termux/files/usr/bin` |
| 配置 | `/data/data/com.termux/files/home/.termux/` |
| 背景图 | `/data/data/com.termux/files/home/.img/` |

## 外部存储目录

默认根目录：

```text
/sdcard/xinhao/
```

常见子目录：

| 目录 | 用途 |
| --- | --- |
| `data/` | 备份包、恢复包 |
| `apk/` | 临时 APK |
| `windows/` | QEMU/Windows |
| `command/` | 自定义命令 |
| `font/` | 字体 |
| `iso/` | ISO 镜像 |
| `mysql/` | MySQL 临时文件 |
| `online_system/` | 离线系统包 |
| `qemu/` | QEMU |
| `server/` | 服务文件 |
| `share/` | 共享文件 |
| `system/` | 多系统数据 |
| `web_config/` | Web 临时配置 |
| `module/` | 模块包 |
| `windows_config/` | Windows/QEMU 配置 |

首次引导会提示创建这些目录。功能报“没有找到目录”时先检查权限和目录是否存在。

## APK assets

`app/src/main/assets/` 是打包进 APK 的资源。功能需要时会复制到用户目录。

| assets 目录 | 说明 |
| --- | --- |
| `runcommand/` | 命令脚本，例如 `zt`、`smsread`、`openleftwindow` |
| `linux/` | Linux 发行版安装工具 |
| `qemu/` | QEMU 脚本 |
| `x11/` | X11 文件 |
| `zipcommand/` | busybox、filebrowser 等压缩文件 |
| `textmate/` | 编辑器语法文件 |
| `font/` | 内置字体 |

复制 assets 常见方式：

```java
UUtils.writerFile("qemu/qemu_win7.sh", new File(FileUrl.INSTANCE.getMainHomeUrl(), "/qemu_win7.sh"));
```

## Android resources

| res 目录 | 说明 |
| --- | --- |
| `layout/` | XML 界面 |
| `drawable/` | shape、图标、图片 |
| `mipmap-*` | 启动图标和菜单图标 |
| `values-zh-rCN/strings.xml` | 中文文案 |
| `values-en/strings.xml` | 英文文案 |
| `xml/` | 设置页、FileProvider、快捷方式 |
| `raw/` | 音频、shader、脚本 |

新增菜单图标通常放在 `mipmap-xxhdpi` 或现有图标目录中，并在 `getIcon()` 里引用。

## 权限

与存储相关的权限在 Manifest 中包括：

```text
WRITE_EXTERNAL_STORAGE
READ_EXTERNAL_STORAGE
MANAGE_EXTERNAL_STORAGE
REQUEST_INSTALL_PACKAGES
READ_SMS
READ_CONTACTS
SYSTEM_ALERT_WINDOW
RECEIVE_BOOT_COMPLETED
```

新增涉及敏感能力的功能时，需要同时考虑：

- Manifest 权限。
- 运行时权限申请。
- 用户拒绝权限后的提示。
- Android 版本差异。

新增路径前先看 `FileUrl.kt`，已有路径尽量复用。
