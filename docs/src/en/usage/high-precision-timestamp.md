---
order: 6
---

# 🍌 High Precision Timestamp

::: tip
生成订单号或者与其他编程语言对接时可能会用到
:::

## getTimestamp()

### 获取秒级的时间戳,可用系统函数time()代替

#### Parameters

> 无

#### Return Values

> 当前秒级的时间戳

#### Example code

```php
/* 获取当前秒级的时间戳 */
TimeHelper::getTimestamp();
// 1698762509
```

## getMilliTimestamp()

### 获取毫秒级的时间戳

#### Parameters

> 无

#### Return Values

> 当前毫秒级的时间戳

#### Example code

```php
/* 获取当前毫秒级的时间戳 */
TimeHelper::getMilliTimestamp();
// 1698762509279
```

## getMicroTimestamp()

### 获取微秒级的时间戳

#### Parameters

> 无

#### Return Values

> 当前微秒级的时间戳

#### Example code

```php
/* 获取当前微秒级的时间戳 */
TimeHelper::getMicroTimestamp();
// 1698762509279645
```

## getNanoTimestamp()

### 获取纳秒级的时间戳

#### Parameters

> 无

#### Return Values

> 当前纳秒级的时间戳

#### Example code

```php
/* 获取当前纳秒级的时间戳 */
TimeHelper::getNanoTimestamp();
// 1698762509279645820
```