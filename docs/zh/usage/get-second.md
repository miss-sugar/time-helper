# 🍏 获取需要的秒数

{% hint style="info" %}
_一般用于设置缓存时间,设置结束时间等_
{% endhint %}

## secondEndToday()

#### 说明

获取到今天晚上零点之前的秒数

```php
secondEndToday(): int
```

#### 参数

无

#### 返回值

从此刻到今天晚上0点的秒数

#### 示例

```php
/* 获取到今天晚上零点之前的秒数 */
TimeHelper::secondEndToday(); 
//32811
```

## secondMinute()

#### 说明

获取N分钟的秒数

```php
secondMinute(int $minutes = 1): int
```

#### 参数

|   参数    |     描述     |   是否必须    |
|:-------:|:----------:|:---------:|
| minutes | 要返回多少分钟的秒数 | 可选, 默认值为1 |

#### 返回值

N分钟的秒数

#### 示例

```php
/* 获取5分钟的秒数 */
TimeHelper::secondMinute(5);
//300
```

## secondHour()

### 说明

获取N小时的秒数

```php
secondHour(int $hours = 1): int
```

### 参数

|   参数    |     描述     |   是否必须    |
|:-------:|:----------:|:---------:|
| minutes | 要返回多少小时的秒数 | 可选, 默认值为1 |