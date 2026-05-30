# 构建与发布

这页先讲清楚一件事：ZeroTermux 的“能编译”和“能发包”不是一回事。它有签名、bootstrap、ABI、X11 AAR、loader APK、环境变量这些东西，少看一项都可能让包装出来却跑不起来。

如果只是本地开发，先打 debug 包。要发给别人用，再认真看签名和发布前检查。

## Gradle 模块

项目包含 4 个模块：

```text
:app
:termux-shared
:terminal-emulator
:terminal-view
```

`settings.gradle` 中直接声明：

```groovy
include ':app', ':termux-shared', ':terminal-emulator', ':terminal-view'
```

## 常用构建命令

Debug：

```bash
./gradlew :app:assembleDebug
```

Release：

```bash
./gradlew :app:assembleRelease
```

查看版本名：

```bash
./gradlew :app:versionName
```

清理：

```bash
./gradlew clean
```

## 版本号

版本号在 `app/build.gradle`：

```groovy
versionCode 118
versionName "0.118.3.58"
```

也可以通过环境变量覆盖：

| 环境变量 | 用途 |
| --- | --- |
| `TERMUX_APP_VERSION_NAME` | 覆盖 `versionName` |
| `TERMUX_APK_VERSION_TAG` | 影响 APK 输出文件名 |

## Bootstrap 变体

`app/build.gradle` 中默认：

```groovy
packageVariant = System.getenv("TERMUX_PACKAGE_VARIANT") ?: "apt-android-7"
```

当前 `downloadBootstraps()` 固定下载：

```text
2026.05.10-r1+apt.android-7
```

并校验 4 个架构的 SHA-256。

## ABI 输出

项目启用了 ABI split，并包含：

```text
x86
x86_64
armeabi-v7a
arm64-v8a
universalApk
```

输出文件名大致为：

```text
termux-app_apt-android-7-debug_universal.apk
termux-app_apt-android-7-release_universal.apk
```

## 签名配置

`app/build.gradle` 当前 debug 和 release 都使用根目录的 `phone.jks`：

```groovy
storeFile rootProject.file("phone.jks")
```

默认值：

| 项 | 默认值 |
| --- | --- |
| keyAlias | `phone1` |
| keyPassword | `654321` |
| storePassword | `123456` |

也可用环境变量覆盖：

```text
KEY_ALIAS
KEY_PASSWORD
STORE_PASSWORD
```

:::warning
不要在公开 PR 中替换正式签名文件，也不要把新的私有签名密码写进仓库。
:::

## X11 AAR 和 loader

根 `build.gradle` 提供任务：

```bash
./gradlew downloadNightlyTermuxX11Aar
```

该任务会从 GitHub Release 下载并校验：

| 文件 | 写入位置 |
| --- | --- |
| `termux-x11-zt-nightly.aar` | `app/libs/termux-x11.aar` |
| `aisle_zt_loader.apk` | `app/src/main/assets/x11/aisle_zt_loader.apk` |
| `SHA256SUMS` | `build/downloads/nightly-termux-x11-aar/SHA256SUMS` |

默认 release 配置：

```text
XiaoTong6666/termux-x11
nightly-termux-x11-aar-zt
```

私有或限流场景可设置 `GITHUB_TOKEN`。

## 发布前检查

发布前别只看 Gradle 成功。至少走一遍：

1. `./gradlew :app:assembleRelease` 能通过。
2. 全新安装后首次启动流程能走完。
3. `pkg update` 正常。
4. 左右菜单能打开。
5. 改过的菜单项能点。
6. 备份/恢复至少做一次轻量验证。
7. X11/VNC/FTP 等高风险功能按改动范围验证。
8. Wiki 或 README 同步更新。
