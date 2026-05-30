# 调试与排错

这页按“真遇到问题时怎么查”来写。ZeroTermux 出错不要只盯着 Java 堆栈，很多问题其实是权限、目录、脚本、bootstrap、X11 资源或安装残留。

## Gradle Sync 失败

先检查版本：

```text
Gradle Wrapper: 9.2.1
AGP: 8.13.2
Kotlin: 2.2.0
JDK: 17+
compileSdk: 36
NDK: 29.0.14206865
```

常见原因：

- Android Studio 版本太旧。
- JDK 不是 17 或更新。
- SDK/NDK 没装全。
- Maven/JitPack/GitHub 网络不可用。

## Bootstrap 下载失败

`app` 构建会执行 `downloadBootstraps()`。如果失败：

1. 看日志里的下载 URL。
2. 确认能访问 GitHub Release。
3. 检查代理。
4. 不要跳过 SHA-256 校验。

如果只是临时网络问题，重跑构建即可。

## 安装后打不开

先看 Logcat：

```bash
adb logcat | grep -i termux
```

重点检查：

- bootstrap 是否安装成功。
- 是否主用户运行。
- 是否有签名冲突。
- 是否旧版本残留。
- 是否权限被拒绝。

## 首次启动目录失败

确认：

- ZeroTermux 有存储权限。
- `/sdcard/xinhao/` 可写。
- 系统没有限制文件管理权限。
- 没有把目录建到不推荐的 `Android/data` 路径后又卸载清空。

## 左侧菜单没有新功能

按顺序检查：

1. 新 `ClickConfig` 是否被 `MainMenuConfig.init()` 加入。
2. `getType()` 是否属于正确分类。
3. 图标资源是否存在。
4. 字符串资源是否存在。
5. XML 菜单是否覆盖了默认菜单。
6. 修改后是否重启应用。

## 点击菜单闪退

常见原因：

- Activity 没在 `AndroidManifest.xml` 注册。
- 在后台线程操作 UI。
- 没有权限就访问文件。
- `mContext` 被释放或不是 Activity。
- assets 路径写错，复制资源失败。

## `zt` 命令不识别

如果终端显示“不支持或ZT版本低不识别”：

1. 检查 `ZTKeyConstants.java` 是否定义命令。
2. 检查 `ZTCommandConfigStore.java` 是否 `map_array_command.put(...)`。
3. 检查是否 `register(new XxxConfig())`。
4. 确认 APK 已重新安装。
5. 确认 `$PREFIX/usr/bin/zt` 是新版本。

## X11 无法启动

检查文件：

```bash
ls $PREFIX/usr/bin/termux-x11
ls $PREFIX/usr/bin/termux-x11-preference
ls $PREFIX/usr/libexec/termux-x11/loader.apk
ls $PREFIX/usr/lib/libXlorie.so
```

如果缺失，使用“安装X11”或“修复环境错误”。如果改了 AAR 或 loader，重新跑 `downloadNightlyTermuxX11Aar` 并重新构建。

## 备份/恢复问题

先确认：

- `/sdcard/xinhao/data/` 存在。
- 有存储权限。
- 备份时应用保持前台。
- 恢复包确实适用于 ZeroTermux。
- 容器名没有使用难以识别的特殊字符。

## 发布前最小验证

1. 全新安装并完成首次引导。
2. 左右菜单能打开。
3. 新增菜单项能点击。
4. `zt help` 正常。
5. `pkg update` 正常。
6. 相关功能按改动范围至少手测一次。
7. Wiki 同步说明变更。

如果只改文档，也建议跑一次 Wiki 构建，至少确认侧栏和链接没有断。
