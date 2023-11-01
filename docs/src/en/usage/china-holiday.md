---
order: 10
next: /en/appendices/special-note.md
---

# 🍏 China Holiday

::: tip
专门针对国内的节假日进行判断, 目前包含`2020年-2024年`的节假日数据, 后续也会持续更新. 为了便于维护和使用, 另起一个类`ChinaHoliday`
:::

## isWorkday()

### 判断日期是否为国内的工作日

#### Parameters

|    参数    |       描述       |    是否必须     |
|:--------:|:--------------:|:-----------:|
| datetime | 任意格式的时间字符串或时间戳 | 可选, 默认为当前时间 |

#### Return Values

> 如果是工作日则返回`true`, 否则返回`false`

#### Example code

```php
/* 判断以下日期是否为国内工作日 */
ChinaHoliday::isWorkday('2023-01-29');
// true

/* 判断今天是否为国内工作日 */
ChinaHoliday::isWorkday();
// true
```

## isHoliday()

### 判断日期是否为国内的节假日

#### Parameters

|    参数    |       描述       |    是否必须     |
|:--------:|:--------------:|:-----------:|
| datetime | 任意格式的时间字符串或时间戳 | 可选, 默认为当前时间 |

#### Return Values

> 如果是节假日则返回`true`, 否则返回`false`

#### Example code

```php
/* 判断以下日期是否为国内的节假日 */
ChinaHoliday::isHoliday('2023-01-28');
// false
```