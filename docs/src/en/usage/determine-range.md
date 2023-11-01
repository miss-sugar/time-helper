---
order: 3
---

# 🍉 Determine Range

## isToday()

### 判断日期是否为今天

#### Parameters

|    参数    |       描述       | 是否必须 |
|:--------:|:--------------:|:----:|
| datetime | 任意类型的字符串时间或时间戳 |  必须  |

#### Return Values

> Bool类型的结果: `true` 或 `false`

#### Example code

```php
/* 判断日期是否为今天 */
TimeHelper::isToday('2020-4-10 23:01:11');
// false
```

## isThisWeek()

### 判断日期是否为本周

#### Parameters

|    参数    |       描述       | 是否必须 |
|:--------:|:--------------:|:----:|
| datetime | 任意类型的字符串时间或时间戳 |  必须  |

#### Return Values

> Bool类型的结果: `true` 或 `false`

#### Example code

```php
/* 判断日期是否为本周 */
TimeHelper::isThisWeek('2020-5-1');
// false
```

## isThisMonth()

### 判断日期是否为本月

#### Parameters

|    参数    |       描述       | 是否必须 |
|:--------:|:--------------:|:----:|
| datetime | 任意类型的字符串时间或时间戳 |  必须  |

#### Return Values

> Bool类型的结果: `true` 或 `false`

#### Example code

```php
/* 判断日期是否为本月 */
TimeHelper::isThisMonth(1586451741);
// false
```

## isThisYear()

### 判断日期是否为今年

#### Parameters

|    参数    |       描述       | 是否必须 |
|:--------:|:--------------:|:----:|
| datetime | 任意类型的字符串时间或时间戳 |  必须  |

#### Return Values

> Bool类型的结果: `true` 或 `false`

#### Example code

```php
/* 判断日期是否为今年 */
TimeHelper::isThisYear('Apr 11, 2023');
// true
```

## getWeekDay()

### 判断日期是星期几

#### Parameters

|    参数    |       描述       |     是否必须     |
|:--------:|:--------------:|:------------:|
| datetime | 任意类型的字符串时间或时间戳 | 可选, 默认值为当前日期 |

#### Return Values

> 返回值为1-7, 1为星期一... 7为星期日

#### Example code

```php
/* 判断指定时间是星期几 */
TimeHelper::getWeekDay('2023-10-01 12:31:01');
// 7

/* 判断今天是星期几 */
TimeHelper::getWeekDay();
// 3
```

## isWeekday()

### 判断日期是否为平常日

#### Parameters

|    参数    |       描述       |     是否必须     |
|:--------:|:--------------:|:------------:|
| datetime | 任意类型的字符串时间或时间戳 | 可选, 默认值为当前日期 |

#### Return Values

> Bool类型的结果: 周一到周五返回`true`, 周六日返回`false`

#### Example code

```php
/* 判断指定时间是否为平常日 */
TimeHelper::isWeekday('Mar 8, 2023');
// true
```

## isWeekend()

### 判断日期是否为周末

#### Parameters

|    参数    |       描述       |     是否必须     |
|:--------:|:--------------:|:------------:|
| datetime | 任意类型的字符串时间或时间戳 | 可选, 默认值为当前日期 |

#### Return Values

> Bool类型的结果: 周六日返回`true`, 周一到周五返回`false`

#### Example code

```php
/* 判断指定时间是否为周末 */
TimeHelper::isWeekend(1698516612);
// true
```