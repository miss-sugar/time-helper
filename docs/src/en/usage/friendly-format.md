---
order: 2
---

# 🍈 Friendly Format

::: tip
一般用于社交类平台,评论,论坛等
:::

## toFriendly()

### 返回友好的日期格式,如N秒前

#### Parameters

| Parameter |   Introduction   |  Require   |
|:---------:|:----------------:|:----------:|
|   time    |  任意类型的字符串时间或时间戳  |     必须     |
|   lang    | 语言: 中文是zh, 英文是en | 可选, 默认值为zh |

#### Return Values

> 友好的日期格式

#### Example code

```php
/* 转换为友好的日期格式 */
TimeHelper::toFriendly('2022-3-2 10:15:33');
// 3天前

/* 转换为友好的日期格式(英文) */
TimeHelper::toFriendly(1646186290, 'en');
// 6 hours ago
```