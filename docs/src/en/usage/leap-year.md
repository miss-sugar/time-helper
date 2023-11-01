---
order: 8
---

# 🥭 Leap Year

::: tip
比原生方法使用起来更方便
:::

## isLeapYear()

### 判断指定日期是否为闰年

#### Parameters

| Parameter | Introduction  |   Require   |
|:---------:|:-------------:|:-----------:|
| datetime  | 任意格式时间字符串或时间戳 | 可选, 默认为当前时间 |

#### Return Values

> 如果是闰年返回 `true`, 否则返回 `false`

#### Example code

```php
/* 判断指定日期是否为闰年 */
TimeHelper::isLeapYear('2020-3-2 10:15:33');
// true

/* 判断今年是否为闰年 */
TimeHelper::isLeapYear();
// false
```

## daysInYear()

### 计算指定日期所在年份的天数

#### Parameters

| Parameter | Introduction  |   Require   |
|:---------:|:-------------:|:-----------:|
| datetime  | 任意格式时间字符串或时间戳 | 可选, 默认为当前时间 |

#### Return Values

> 返回指定日期所在年份的天数

#### Example code

```php
/* 计算以下日期当年的天数 */
TimeHelper::daysInYear(1646360133);
// 365
```

## daysInMonth()

### 计算指定日期所在月份的天数

#### Parameters

| Parameter | Introduction  |   Require   |
|:---------:|:-------------:|:-----------:|
| datetime  | 任意格式时间字符串或时间戳 | 可选, 默认为当前时间 |

#### Return Values

> 返回指定日期所在月份的天数

#### Example code

```php
/* 计算以下日期当月的天数 */
TimeHelper::daysInMonth('2020-2-1');
// 29

/* 计算本月的天数 */
TimeHelper::daysInMonth();
// 31
```