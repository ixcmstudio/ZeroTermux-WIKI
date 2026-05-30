# 左侧菜单系统

ZeroTermux 的多数功能都从左侧菜单进入。用户反馈某个功能点了没反应，通常先从这里查。新增用户可点击的功能，也优先接入这套系统。

## 核心文件

| 文件 | 说明 |
| --- | --- |
| `MainMenuConfig.java` | 注册所有菜单分类和菜单项 |
| `MainMenuClickConfig.java` | 菜单项接口 |
| `BaseMenuClickConfig.java` | 菜单项基类，提供默认实现和通用弹窗 |
| `MainMenuCategoryData.java` | 菜单分类数据 |
| `MainMenuAdapter.java` | 菜单分类适配器 |
| `MainMenuItemAdapter.java` | 菜单项适配器 |
| `XMLMainMenuConfig.java` | XML 自定义菜单加载 |

## 菜单分类

`MainMenuConfig` 中定义了分类 code：

```java
CODE_COMMON_FUNCTIONS
CODE_X11_FEATURES
CODE_BEAUTIFICATION_FUNCTION
CODE_ONLINE_FEATURES
CODE_ZT_FEATURES
CODE_ZT_ROOT
CODE_ZT_ENGINE
CODE_ZT_CONFIG
```

每个分类创建一个 `ArrayList<MainMenuClickConfig>`，然后加入 `MAIN_MENU_CATEGORY_DATAS`。

## 菜单项示例

菜单项通常继承 `BaseMenuClickConfig`：

```java
public class ExampleClickConfig extends BaseMenuClickConfig {
    @Override
    public int getType() {
        return CODE_COMMON_FUNCTIONS;
    }

    @Override
    public Drawable getIcon(Context context) {
        return context.getDrawable(R.mipmap.ic_launcher);
    }

    @Override
    public String getString(Context context) {
        return context.getString(R.string.example);
    }

    @Override
    public void onClick(View view, Context context) {
        // 点击逻辑
    }
}
```

## 新增菜单项步骤

1. 在 `config/mainmenu/config/` 下新增 `xxxClickConfig`。
2. 继承 `BaseMenuClickConfig`。
3. 实现图标、名称、点击逻辑。
4. 在 `values-zh-rCN/strings.xml` 和其他语言文件中补文案。
5. 在 `MainMenuConfig.init()` 的目标分类中 `add(new XxxClickConfig())`。
6. 运行应用，确认左侧菜单出现并能点击。

## 点击后常见动作

### 打开 Activity

```java
context.startActivity(new Intent(context, SomeActivity.class));
```

同时记得在 `AndroidManifest.xml` 注册 Activity。

### 弹出自定义 Dialog

```java
SwitchDialog dialog = switchDialogShow("标题", "内容", context);
dialog.show();
```

复杂弹窗通常放在 `zerocore/dialog/`。

### 向终端发送命令

```java
SingletonCommunicationUtils.getInstance()
    .getmSingletonCommunicationListener()
    .sendTextToTerminal("pkg update\n");
```

用于脚本入口、QEMU、发行版安装等场景。

### 写入 assets 文件

```java
UUtils.writerFile("qemu/qemu_win7.sh", new File(FileUrl.INSTANCE.getMainHomeUrl(), "/qemu_win7.sh"));
```

这种模式表示先把 APK 内置资源复制到用户环境，再发送命令执行。

## XML 菜单

项目支持使用 XML 配置左侧菜单。相关命令：

```bash
zt menu update
zt menu reset
```

如果 XML 配置出错，应用会提示 XML 格式不正确，并允许打开编辑器修改。

## 开发注意

- 菜单项里避免长时间阻塞 UI 线程。
- 需要权限时用已有权限工具申请，例如 `XXPermissions`。
- 文件路径尽量走 `FileUrl.kt`，减少散落的硬编码。
- 菜单文案放入资源文件，避免直接写死中文。
- 如果功能要兼容 XML 菜单，注意 `getXmlString()` 和 `setXmlName()`。
- 如果只是向终端发送一条脚本命令，优先复用现有 `SingletonCommunicationUtils` 模式。
- 如果功能需要复制脚本到 home，先确认 assets 里资源路径正确。
