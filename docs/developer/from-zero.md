# 从 0 开始

这页按真实接手项目的顺序写。先把代码拉下来，能编译，能装到手机，能跑过首次引导。做到这一步之前，先别急着改功能。

## 1. 拉取项目

```bash
git clone https://github.com/hanxinhao000/ZeroTermux.git
cd ZeroTermux
```

建议同时拉取 Wiki，方便边改边补文档：

```bash
git clone https://github.com/ixcmstudio/ZeroTermux-WIKI.git
```

## 2. 准备环境

项目比较吃 Android 工具链版本。建议先按下面的版本来，跑通以后再考虑升级。

| 工具 | 建议 |
| --- | --- |
| Android Studio | 使用较新的稳定版，能支持 AGP 8.13.2 |
| JDK | 17 或更新版本 |
| Android SDK | compileSdk 36 |
| Android NDK | `29.0.14206865` |
| Gradle | 使用项目自带 `gradlew` |
| Git | 用于拉取和提交代码 |

这些版本不是猜的，配置就在这些文件里：

```text
gradle/wrapper/gradle-wrapper.properties
gradle.properties
build.gradle
app/build.gradle
```

关键版本：

| 项 | 当前配置 |
| --- | --- |
| Gradle Wrapper | 9.2.1 |
| Android Gradle Plugin | 8.13.2 |
| Kotlin | 2.2.0 |
| compileSdk | 36 |
| minSdk | 23 |
| targetSdk | 28 |
| NDK | 29.0.14206865 |
| Java/Kotlin JVM target | 17 |

## 3. 第一次用 Android Studio 打开

1. 用 Android Studio 打开 `ZeroTermux` 根目录。
2. 等待 Gradle Sync。
3. 如果提示缺少 SDK/NDK，按 IDE 提示安装。
4. 不要看到 IDE 提示“可升级”就一路点。这个项目里有 NDK、bootstrap、AAR、本地 jar/aar，先保证原配置能跑。

## 4. 第一次构建

Windows：

```powershell
.\gradlew.bat :app:assembleDebug
```

Linux/macOS：

```bash
./gradlew :app:assembleDebug
```

这里第一次慢是正常的。构建 `app` 会跑 `downloadBootstraps`，它要下载 Termux bootstrap zip：

```text
bootstrap-aarch64.zip
bootstrap-arm.zip
bootstrap-i686.zip
bootstrap-x86_64.zip
```

如果这里失败，通常不是代码错，是 GitHub 下载、代理、DNS 或校验问题。先看报错 URL，别急着改 Gradle 脚本。

## 5. 安装到设备

```bash
adb install -r app/build/outputs/apk/debug/termux-app_apt-android-7-debug_universal.apk
```

实际 APK 文件名会受构建类型、ABI 和 `TERMUX_APK_VERSION_TAG` 影响。找不到时查看：

```text
app/build/outputs/apk/
```

## 6. 第一次跑起来

首次打开不是直接进 `TermuxActivity`，而是进引导页：

```text
com.termux.zerocore.guide.TermuxGuideActivity
```

引导完成后会进入主终端：

```text
com.termux.app.TermuxActivity
```

首次运行会安装 bootstrap、创建目录、申请存储权限。这里不要为了“快点进主界面”随便跳过。很多功能默认依赖 `/sdcard/xinhao`，目录没创建，后面备份、QEMU、字体、自定义命令都会出怪问题。

## 7. 第一次改代码，建议从小地方下手

优先从小入口开始：

- 改一个菜单项：看 [左侧菜单系统](/developer/main-menu)。
- 改 `zt` 命令：看 [`zt` 命令系统](/developer/zt-command)。
- 改文案：先改 `app/src/main/res/values-zh-rCN/strings.xml`。
- 改布局：先找 `app/src/main/res/layout/` 对应 XML。
- 改脚本资源：看 `app/src/main/assets/`。

这些地方先别急着动：

- `TermuxActivity.java`
- `TermuxService.java`
- bootstrap 安装逻辑
- 签名配置
- 包名和 sharedUserId

它们不是不能改，而是改之前要先知道影响范围。尤其是包名、sharedUserId、bootstrap、签名，动错了可能直接影响安装、升级和 Termux 插件兼容。

## 8. 一个比较稳的改动流程

1. 先在手机上确认原版功能能跑。
2. 新建或修改一个很小的入口。
3. 编译 debug 包。
4. 安装到测试机。
5. 真机点一遍功能。
6. 如果涉及终端命令，再在终端里手动跑一遍。
7. 如果涉及文档，顺手补 Wiki。

ZeroTermux 这种项目，编译通过只算过了第一关。很多问题只有真机、权限、存储路径、首次引导、后台限制一起出现时才会暴露。
