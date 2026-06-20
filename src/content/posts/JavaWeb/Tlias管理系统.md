---
title: Tlias管理系统
description: web系统学习之路开启
image: 'https://img.f3f3.top/img/2026/05/30/da45596576f04825512ee17c4ebb77c6.webp' #文章封面页
tags:
  - Tlias管理系统初识与进阶
category:  JavaWeb
  #永久连接id
abbrlink: "47257565"
# 文章置顶
pinned: false #文章置顶
published: 2026-06-14 20:19:03
updated: 2026-06-18 21:43:03
---

## 项目需求

- 部门管理：查询、新增、修改、删除

- 员工管理：

  - 查询、新增、修改、删除
  - 文件上传

- 报表统计

- 登录认证

- 日志管理

- 班级管理（自己实战内容）

- 学员管理（自己实战内容）

![image.webp](https://imgbed.f3f3.top/file/picgo/1781930618184_image.webp)

**基于REST风格URL如下：**

- http://localhost:8080/users/1       GET：查询id为1的用户
- http://localhost:8080/users          POST：新增用户
- http://localhost:8080/users          PUT：修改用户
- http://localhost:8080/users/1       DELETE：删除id为1的用户

其中总结起来，就一句话：通过URL定位要操作的资源，通过HTTP动词(请求方式)来描述具体的操作。

## 工程搭建

创建SpringBoot工程并引入web开发起步依赖、mybatis、mysql驱动、lombok

![image.webp](https://imgbed.f3f3.top/file/picgo/1781931767293_image.webp)

```
spring:
  application:
    name: tlias-web-management
  datasource:
    url: jdbc:mysql://localhost:3306/tlias
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: 123456
mybatis:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

## 部门管理

### 统一响应结果

```
package com.itheima.pojo;

import lombok.Data;
import java.io.Serializable;

/**
 * 后端统一返回结果
 */
@Data
public class Result {

    private Integer code; //编码：1成功，0为失败
    private String msg; //错误信息
    private Object data; //数据

    public static Result success() {
        Result result = new Result();
        result.code = 1;
        result.msg = "success";
        return result;
    }

    public static Result success(Object object) {
        Result result = new Result();
        result.data = object;
        result.code = 1;
        result.msg = "success";
        return result;
    }

    public static Result error(String msg) {
        Result result = new Result();
        result.msg = msg;
        result.code = 0;
        return result;
    }

}
```

![image.webp](https://imgbed.f3f3.top/file/picgo/1781934894097_image.webp)

### 部门表查询

#### 前置数据

**创建部门数据库表**

```
CREATE TABLE dept (
  id int unsigned PRIMARY KEY AUTO_INCREMENT COMMENT 'ID, 主键',
  name varchar(10) NOT NULL UNIQUE COMMENT '部门名称',
  create_time datetime DEFAULT NULL COMMENT '创建时间',
  update_time datetime DEFAULT NULL COMMENT '修改时间'
) COMMENT '部门表';

INSERT INTO dept VALUES (1,'学工部','2023-09-25 09:47:40','2024-07-25 09:47:40'),
                      (2,'教研部','2023-09-25 09:47:40','2024-08-09 15:17:04'),
                      (3,'咨询部','2023-09-25 09:47:40','2024-07-30 21:26:24'),
                      (4,'就业部','2023-09-25 09:47:40','2024-07-25 09:47:40'),
                      (5,'人事部','2023-09-25 09:47:40','2024-07-25 09:47:40'),
                      (6,'行政部','2023-11-30 20:56:37','2024-07-30 20:56:37');
```

- 在 `application.yml` 配置文件中配置数据库的连接信息。

```
spring:
  application:
    name: tlias-web-management
  datasource:
    url: jdbc:mysql://localhost:3306/tlias
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: 123456
mybatis:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

#### 部门实体类

```
package com.itheima.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dept {
    private Integer id;
    private String name;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
```

![image.webp](https://imgbed.f3f3.top/file/picgo/1781932502244_image.webp)

- Controller层，负责接收前端发起的请求，并调用service查询部门数据，然后响应结果。

- Service层，负责调用Mapper接口方法，查询所有部门数据。

- Mapper层，执行查询所有部门数据的操作。

#### mybatis属性封装

![image.webp](https://imgbed.f3f3.top/file/picgo/1781934894097_image.webp)

部门的数据中，id、name两个属性是有值的，但是createTime、updateTime两个字段值并未成功封装，而数据库中是有对应的字段值的，这是为什么呢？

- 实体类属性名和数据库表查询返回的字段名一致，mybatis会自动封装。
- 如果实体类属性名和数据库表查询返回的字段名不一致，不能自动封装。

![image.webp](https://imgbed.f3f3.top/file/picgo/1781934178351_image.webp)

##### 手动映射

在DeptMapper接口方法上，通过 @Results及@Result 进行手动结果映射。

```
@Results({@Result(column = "create_time", property = "createTime"),
          @Result(column = "update_time", property = "updateTime")})
@Select("select id, name, create_time, update_time from dept")
public List<Dept> findAll();
```

##### 起别名

```
@Select("select id, name, create_time createTime, update_time updateTime from dept")
public List<Dept> findAll();
```

##### 驼峰命名（推荐）

如果字段名与属性名符合驼峰命名规则，mybatis会自动通过驼峰命名规则映射。驼峰命名规则：   abc_xyz    =>   abcXyz

- 表中字段名：abc_xyz
- 类中属性名：abcXyz

在application.yml中做如下配置，开启开关。

```
mybatis:
  configuration:
    map-underscore-to-camel-case: true
```

**请求路径**/depts
  **请求方式**：GET
  **接口描述**：该接口用于部门列表数据查询

#### Controller

```
@RestController   //RestController=Controller+RestBody
public class DeptController {

    @Autowired
    private DeptService deptService;

    /**
     * 查询部门列表
     */
    @GetMapping("/depts")
    public Result list(){
        List<Dept> deptList = deptService.findAll();
        return Result.success(deptList);
    }
}
```

- GET方式：@GetMapping
- POST方式：@PostMapping
- PUT方式：@PutMapping
- DELETE方式：@DeleteMapping

#### Service

```
public interface DeptService {
    /**
     * 查询所有部门
     */
    public List<Dept> findAll();
}
```

```
@Service
public class DeptServiceImpl implements DeptService {
    
    @Autowired
    private DeptMapper deptMapper;

    public List<Dept> findAll() {
        return deptMapper.findAll();
    }
}
```

#### Mapper

```
@Mapper
public interface DeptMapper {
    /**
     * 查询所有部门
     */
    @Select("select * from dept")
    public List<Dept> findAll();
    
}
```

#### 前后端联调

![image.webp](https://imgbed.f3f3.top/file/picgo/1781935470226_image.webp)

1.浏览器发起请求，请求的是localhost:90 ，那其实请求的是nginx服务器。

2.在nginx服务器中呢，并没有对请求直接进行处理，而是将请求转发给了后端的tomcat服务器，最终由tomcat服务器来处理该请求。

**通过nginx的反向代理实现**的。 那为什么浏览器不直接请求后端的tomcat服务器，而是直接请求nginx服务器呢

安全：由于后端的tomcat服务器一般都会搭建集群，会有很多的服务器，把所有的tomcat暴露给前端，让前端直接请求tomcat，对于后端服务器是比较危险的。

灵活：基于nginx的反向代理实现，更加灵活，后端想增加、减少服务器，对于前端来说是无感知的，只需要在nginx中配置即可。

负载均衡：基于nginx的反向代理，可以很方便的实现后端tomcat的负载均衡操作。

### 部门删除

#### **`@RequestParam`**

```
@DeleteMapping("/depts")
public Result delete(@RequestParam("id") Integer deptId){
    System.out.println("根据ID删除部门: " + deptId);
    return Result.success();
}
```

```
@DeleteMapping("/depts")
public Result delete(Integer id){
    System.out.println("根据ID删除部门: " + deptId);
    return Result.success();
}
//如果请求参数名与形参变量名相同，直接定义方法形参即可接收。（省略@RequestParam）
```



#### Controller

```
/**
 * 根据id删除部门 - delete http://localhost:8080/depts?id=1
 */
@DeleteMapping("/depts")
public Result delete(Integer id){
    System.out.println("根据id删除部门, id=" + id);
    deptService.delete(id);
    return Result.success();
}
```

#### Service

```
/**
 * 根据id删除部门
 */
package com.itheima.service;

import com.itheima.pojo.Dept;

import java.util.List;

public interface DeptService {
    List<Dept> findAll();
    void delete(Integer id);
```

```
package com.itheima.service.impl;

import com.itheima.mapper.DeptMapper;
import com.itheima.pojo.Dept;
import com.itheima.service.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;

@Service
public class DeptServiceimpl implements DeptService {
    @Autowired
    private DeptMapper deptMapper;
    @Override
    public List<Dept> findAll() {
        return deptMapper.findAll();
    }

    @Override
    public void delete(Integer id) {
       deptMapper.delete(id);
    }
```



#### Mapper

```
package com.itheima.mapper;
import com.itheima.pojo.Dept;
import org.apache.ibatis.annotations.*;
import java.util.List;
//操作增删改功能
@Mapper
public interface DeptMapper {
    @Select("select id, name, create_time createTime, update_time updateTime from dept")
    public List<Dept> findAll();
    @Delete("delete from dept where id = #{id}")
    public void delete(Integer id);
```

### 新增部门

#### @RequestBody

在controller中，需要接收前端传递的请求参数。 那接下来，我们就先来看看在服务器端的Controller程序中，如何获取json格式的参数。 

- JSON格式的参数，通常会使用一个实体对象进行接收 。
- 规则：JSON数据的键名与方法形参对象的属性名相同，并需要使用`@RequestBody`注解标识。

前端传递的请求参数格式为json，内容如下：`{"name":"研发部"}`。这里，我们可以通过一个对象来接收，只需要保证对象中有name属性即可。

#### Controller

```
@RequestMapping("/depts")
@RestController   //交由io容器管理
public class DeptController {

//新增部门 - POST http://localhost:8080/depts   请求参数：{"name":"研发部"}
@PostMapping
    public Result add(@RequestBody Dept dept)
    {
        log.info("保存的部门数据为：{}" ,dept);
        deptService.add(dept);
        return Result.success();
    }
    }
```

#### Service

```
 @Override
    public void add(Dept dept) {
        LocalDateTime now = LocalDateTime.now();
        dept.setCreateTime(now);
        dept.setUpdateTime(now);
        deptMapper.add(dept);
    }
```

```
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dept {
    private Integer id;
    private String name;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Shanghai")
    private LocalDateTime createTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Shanghai")
    private LocalDateTime updateTime;
}
```

#### Mapper

```
/**
 * 保存部门
 */
@Insert("insert into dept(name,create_time,update_time) values(#{name},#{createTime},#{updateTime})")
void insert(Dept dept);
```

在mapper接口中，需要传递多个参数，可以把多个参数封装到一个对象中。 在SQL语句中获取参数的时候，`#{...}` 里面写的是对象的属性名【注意是属性名，不是表的字段名】

### 修改部门

#### 根据id查询部门

##### @PathVariable

`/depts/1`，`/depts/2` 这种在url中传递的参数，我们称之为**路径参数**。 那么如何接收这样的路径参数呢 ？

路径参数：通过请求URL直接传递参数，使用{…}来标识该路径参数，需要使用 **`@PathVariable`**获取路径参数

##### Controller

```
 @GetMapping("/{id}")
    public Result getinfo(@PathVariable ("id") Integer deptsid){
       log.info("根据id查询的部门id为：{}" ,deptsid);
        Dept dept = deptService.findinfo(deptsid);
        return Result.success(dept);
    }
```

##### Service

```
package com.itheima.service;

import com.itheima.pojo.Dept;

import java.util.List;

public interface DeptService {
    List<Dept> findAll();
    void delete(Integer id);
    void add(Dept dept);
    Dept findinfo(Integer id);
```



```
  @Override
    public Dept findinfo(Integer id) {
        return deptMapper.findinfo(id);
    }
```

##### Mapper

```
  @Select("select id, name, create_time createTime, update_time updateTime from dept where id = #{id}")
    public Dept findinfo(Integer id);
```

#### 修改部门

![image.webp](https://imgbed.f3f3.top/file/picgo/1781938770333_image.webp)

##### @RequestBody

##### Controller

```
 @PutMapping
    public Result update(@RequestBody Dept dept) {
       log.info("修改的部门数据为：{}" , dept);
        deptService.update(dept);
        return Result.success();
    }
```



##### Service

```
  package com.itheima.service;

import com.itheima.pojo.Dept;

import java.util.List;

public interface DeptService {
    List<Dept> findAll();
    void delete(Integer id);
    void add(Dept dept);
    Dept findinfo(Integer id);

    void getinfo(Dept dept);
    void update(Dept dept);
}

```



```
@Override
    public void update(Dept dept) {
        LocalDateTime now = LocalDateTime.now();
        dept.setUpdateTime(now);
        deptMapper.update(dept);
    }
```



##### Mapper

```
package com.itheima.mapper;
import com.itheima.pojo.Dept;
import org.apache.ibatis.annotations.*;
import java.util.List;
//操作增删改功能
@Mapper
public interface DeptMapper {
    @Select("select id, name, create_time createTime, update_time updateTime from dept")
    public List<Dept> findAll();
    @Delete("delete from dept where id = #{id}")
    public void delete(Integer id);
    @Insert("insert into dept(name, create_time, update_time) values(#{name}, #{createTime}, #{updateTime})")
    public void add(Dept dept);
    
    //根据id查询回显并修改部门
    @Select("select id, name, create_time createTime, update_time updateTime from dept where id = #{id}")
    public Dept findinfo(Integer id);
    @Update("update dept set name = #{name}, update_time = #{updateTime} where id = #{id}")
    public void update(Dept dept)
```

#### @RequstMapping

```
// 文件路径：src/main/java/com/itheima/controller/DeptController.java
package com.itheima.controller;

import com.itheima.anno.LogOperation;
import com.itheima.pojo.Dept;
import com.itheima.pojo.Result;
import com.itheima.service.DeptService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import java.io.File;
import java.util.List;
import java.util.logging.Logger;
@Slf4j
@RequestMapping("/depts")
@RestController   //交由io容器管理
public class DeptController {

    @Autowired
    private DeptService deptService;
    @LogOperation
    // 查询所有部门信息
    @GetMapping
    public Result list() {
        List<Dept> deptList = deptService.findAll();
        return Result.success(deptList);
    }

    // 删除部门
//    @DeleteMapping("/depts")
//    public Result delete(HttpServletRequest request) {
//        String id = request.getParameter("id");
//        int deptId = Integer.parseInt(id);
//        System.out.println("删除的部门id为：" + deptId);
//        return Result.success();
//    }
    @LogOperation
    @DeleteMapping
    public Result delete( Integer id) {
        log.info("删除的部门id为：{}", id);
        deptService.delete(id);
        return Result.success();
    }
    @LogOperation
    @PostMapping
    public Result add(@RequestBody Dept dept)
    {
        log.info("保存的部门数据为：{}" ,dept);
        deptService.add(dept);
        return Result.success();
    }
    @LogOperation
    @GetMapping("/{id}")
    public Result getinfo(@PathVariable ("id") Integer deptsid){
       log.info("根据id查询的部门id为：{}" ,deptsid);
        Dept dept = deptService.findinfo(deptsid);
        return Result.success(dept);
    }
    @LogOperation
    @PutMapping
    public Result update(@RequestBody Dept dept) {
       log.info("修改的部门数据为：{}" , dept);
        deptService.update(dept);
        return Result.success();
    }
}
```

### 日志技术

#### 定义

日志用于记录应用程序的运行信息、状态信息和错误信息。专业的日志框架（如 Logback）替代 `System.out.println`，提供灵活的日志级别控制、多种输出目标（控制台/文件）和格式化能力。

#### 日志框架

使用 `System.out.println(...)` 记录日志的缺陷：

- **硬编码**：无法灵活控制输出与否，只能删除代码
- **输出受限**：只能输出到控制台
- **不便于扩展维护**：无法按级别过滤、按格式输出

#### 对比

| 框架    | 特点                                                |
| ------- | --------------------------------------------------- |
| JUL     | JavaSE 官方日志框架，配置简单但不够灵活，性能较差   |
| Log4j   | 流行的日志框架，灵活的配置选项，支持多种输出目标    |
| Logback | 基于 Log4j 升级，更多功能和配置选项，性能优于 Log4j |
| Slf4j   | 简单日志门面，提供标准接口，允许切换底层日志框架    |

#### Logback 依赖引入

SpringBoot 已内置传递 Logback 依赖，无需额外引入。若单独使用：

```
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.4.11</version>
</dependency>
```

#### 配置文件 logback.xml

放置在 `src/main/resources` 目录下：

```
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!-- 控制台输出 -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50}-%msg%n</pattern>
        </encoder>
    </appender>

<!-- 系统文件输出 -->
	<appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
		<rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
			<!-- 日志文件输出的文件名, %i表示序号 -->
			<FileNamePattern>/usr/local/tlias-app/tlias-%d{yyyy-MM-dd}-%i.log</FileNamePattern>
			<!-- 最多保留的历史日志文件数量 -->
			<MaxHistory>30</MaxHistory>
			<!-- 最大文件大小，超过这个大小会触发滚动到新文件，默认为 10MB -->
			<maxFileSize>10MB</maxFileSize>
		</rollingPolicy>

		<encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
			<!--格式化输出：%d 表示日期，%thread 表示线程名，%-5level表示级别从左显示5个字符宽度，%msg表示日志消息，%n表示换行符 -->
			<pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50}-%msg%n</pattern>
		</encoder>
	</appender>
    
    
    <!-- 日志输出级别 -->
    <root level="ALL">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
```

Pattern 格式化占位符说明：

| 占位符        |            含义             |
| ------------- | :-------------------------: |
| `%d`          |            日期             |
| `%thread`     |           线程名            |
| `%-5level`    | 日志级别，左对齐 5 字符宽度 |
| `%logger{50}` |  Logger 名称，最长 50 字符  |
| `%msg`        |          日志消息           |
| `%n`          |           换行符            |

#### 日志级别

级别由低到高：**TRACE → DEBUG → INFO → WARN → ERROR**

`<root level="info">` 表示仅输出大于等于 INFO 级别的日志（INFO / WARN / ERROR），DEBUG 和 TRACE 不会输出。

| 配置值 | 效果                                     |
| :----: | ---------------------------------------- |
|  ALL   | 输出所有级别日志                         |
|  OFF   | 关闭所有日志                             |
|  INFO  | 仅输出 INFO、WARN、ERROR（生产环境推荐） |
| DEBUG  | 输出 DEBUG 及以上（开发调试推荐）        |

#### 常见场景

```
// 文件路径：src/main/java/com/itheima/controller/DeptController.java
package com.itheima.controller;

import com.itheima.anno.LogOperation;
import com.itheima.pojo.Dept;
import com.itheima.pojo.Result;
import com.itheima.service.DeptService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import java.io.File;
import java.util.List;
import java.util.logging.Logger;
@Slf4j
@RequestMapping("/depts")
@RestController   //交由io容器管理
public class DeptController {

    @Autowired
    private DeptService deptService;
    @LogOperation
    // 查询所有部门信息
    @GetMapping
    public Result list() {
        List<Dept> deptList = deptService.findAll();
        return Result.success(deptList);
    }

    // 删除部门
//    @DeleteMapping("/depts")
//    public Result delete(HttpServletRequest request) {
//        String id = request.getParameter("id");
//        int deptId = Integer.parseInt(id);
//        System.out.println("删除的部门id为：" + deptId);
//        return Result.success();
//    }
    @LogOperation
    @DeleteMapping
    public Result delete( Integer id) {
        log.info("删除的部门id为：{}", id);
        deptService.delete(id);
        return Result.success();
    }
    @LogOperation
    @PostMapping
    public Result add(@RequestBody Dept dept)
    {
        log.info("保存的部门数据为：{}" ,dept);
        deptService.add(dept);
        return Result.success();
    }
    @LogOperation
    @GetMapping("/{id}")
    public Result getinfo(@PathVariable ("id") Integer deptsid){
       log.info("根据id查询的部门id为：{}" ,deptsid);
        Dept dept = deptService.findinfo(deptsid);
        return Result.success(dept);
    }
    @LogOperation
    @PutMapping
    public Result update(@RequestBody Dept dept) {
       log.info("修改的部门数据为：{}" , dept);
        deptService.update(dept);
        return Result.success();
    }
}
```



- 生产环境设为 INFO 级别记录关键业务操作
- 开发调试时设为 DEBUG 级别查看详细执行过程
- 将日志输出到文件并按日期/大小滚动，便于持久化追踪

#### 注意事项

- SpringBoot 已内置 Logback，无需额外引入依赖
- `logback.xml` 需放在 `src/main/resources` 下
- 使用 `@Slf4j` 注解可省略手动定义 Logger
- 日志消息推荐使用 `{}` 占位符而非字符串拼接
- 生产环境不建议使用 `System.out.println`，应统一使用日志框架

## 员工管理

### 前置数据

```
-- 员工表
create table emp(
    id int unsigned primary key auto_increment comment 'ID,主键',
    username varchar(20) not null unique comment '用户名',
    password varchar(50) default '123456' comment '密码',
    name varchar(10) not null comment '姓名',
    gender tinyint unsigned not null comment '性别, 1:男, 2:女',
    phone char(11) not null unique comment '手机号',
    job tinyint unsigned comment '职位, 1 班主任, 2 讲师 , 3 学工主管, 4 教研主管, 5 咨询师',
    salary int unsigned comment '薪资',
    image varchar(300) comment '头像',
    entry_date date comment '入职日期',
    dept_id int unsigned comment '部门ID',
    create_time datetime comment '创建时间',
    update_time datetime comment '修改时间'
) comment '员工表';


INSERT INTO emp VALUES 
    (1,'shinaian','123456','施耐庵',1,'13309090001',4,15000,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2000-01-01',2,'2023-10-20 16:35:33','2023-11-16 16:11:26'),
    (2,'songjiang','123456','宋江',1,'13309090002',2,8600,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2015-01-01',2,'2023-10-20 16:35:33','2023-10-20 16:35:37'),
    (3,'lujunyi','123456','卢俊义',1,'13309090003',2,8900,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2008-05-01',2,'2023-10-20 16:35:33','2023-10-20 16:35:39'),
    (4,'wuyong','123456','吴用',1,'13309090004',2,9200,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2007-01-01',2,'2023-10-20 16:35:33','2023-10-20 16:35:41'),
    (5,'gongsunsheng','123456','公孙胜',1,'13309090005',2,9500,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2012-12-05',2,'2023-10-20 16:35:33','2023-10-20 16:35:43'),
    (6,'huosanniang','123456','扈三娘',2,'13309090006',3,6500,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2013-09-05',1,'2023-10-20 16:35:33','2023-10-20 16:35:45'),
    (7,'chaijin','123456','柴进',1,'13309090007',1,4700,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2005-08-01',1,'2023-10-20 16:35:33','2023-10-20 16:35:47'),
    (8,'likui','123456','李逵',1,'13309090008',1,4800,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2014-11-09',1,'2023-10-20 16:35:33','2023-10-20 16:35:49'),
    (9,'wusong','123456','武松',1,'13309090009',1,4900,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2011-03-11',1,'2023-10-20 16:35:33','2023-10-20 16:35:51'),
    (10,'linchong','123456','林冲',1,'13309090010',1,5000,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2013-09-05',1,'2023-10-20 16:35:33','2023-10-20 16:35:53'),
    (11,'huyanzhuo','123456','呼延灼',1,'13309090011',2,9700,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2007-02-01',2,'2023-10-20 16:35:33','2023-10-20 16:35:55'),
    (12,'xiaoliguang','123456','小李广',1,'13309090012',2,10000,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2008-08-18',2,'2023-10-20 16:35:33','2023-10-20 16:35:57'),
    (13,'yangzhi','123456','杨志',1,'13309090013',1,5300,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2012-11-01',1,'2023-10-20 16:35:33','2023-10-20 16:35:59'),
    (14,'shijin','123456','史进',1,'13309090014',2,10600,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2002-08-01',2,'2023-10-20 16:35:33','2023-10-20 16:36:01'),
    (15,'sunerniang','123456','孙二娘',2,'13309090015',2,10900,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2011-05-01',2,'2023-10-20 16:35:33','2023-10-20 16:36:03'),
    (16,'luzhishen','123456','鲁智深',1,'13309090016',2,9600,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2010-01-01',2,'2023-10-20 16:35:33','2023-10-20 16:36:05'),
    (17,'liying','12345678','李应',1,'13309090017',1,5800,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2015-03-21',1,'2023-10-20 16:35:33','2023-10-20 16:36:07'),
    (18,'shiqian','123456','时迁',1,'13309090018',2,10200,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2015-01-01',2,'2023-10-20 16:35:33','2023-10-20 16:36:09'),
    (19,'gudasao','123456','顾大嫂',2,'13309090019',2,10500,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2008-01-01',2,'2023-10-20 16:35:33','2023-10-20 16:36:11'),
    (20,'ruanxiaoer','123456','阮小二',1,'13309090020',2,10800,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2018-01-01',2,'2023-10-20 16:35:33','2023-10-20 16:36:13'),
    (21,'ruanxiaowu','123456','阮小五',1,'13309090021',5,5200,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2015-01-01',3,'2023-10-20 16:35:33','2023-10-20 16:36:15'),
    (22,'ruanxiaoqi','123456','阮小七',1,'13309090022',5,5500,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2016-01-01',3,'2023-10-20 16:35:33','2023-10-20 16:36:17'),
    (23,'ruanji','123456','阮籍',1,'13309090023',5,5800,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2012-01-01',3,'2023-10-20 16:35:33','2023-10-20 16:36:19'),
    (24,'tongwei','123456','童威',1,'13309090024',5,5000,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2006-01-01',3,'2023-10-20 16:35:33','2023-10-20 16:36:21'),
    (25,'tongmeng','123456','童猛',1,'13309090025',5,4800,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2002-01-01',3,'2023-10-20 16:35:33','2023-10-20 16:36:23'),
    (26,'yanshun','123456','燕顺',1,'13309090026',5,5400,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2011-01-01',3,'2023-10-20 16:35:33','2023-11-08 22:12:46'),
    (27,'lijun','123456','李俊',1,'13309090027',2,6600,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2004-01-01',2,'2023-10-20 16:35:33','2023-11-16 17:56:59'),
    (28,'lizhong','123456','李忠',1,'13309090028',5,5000,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2007-01-01',3,'2023-10-20 16:35:33','2023-11-17 16:34:22'),
    (30,'liyun','123456','李云',1,'13309090030',NULL,NULL,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2020-03-01',NULL,'2023-10-20 16:35:33','2023-10-20 16:36:31'),
    (36,'linghuchong','123456','令狐冲',1,'18809091212',2,6800,'https://web-framework.oss-cn-hangzhou.aliyuncs.com/2023/1.jpg','2023-10-19',2,'2023-10-20 20:44:54','2023-11-09 09:41:04');
    

-- 员工工作经历信息
create table emp_expr(
    id int unsigned primary key auto_increment comment 'ID, 主键',
    emp_id int unsigned comment '员工ID',
    begin date comment '开始时间',
    end  date comment '结束时间',
    company varchar(50) comment '公司名称',
    job varchar(50) comment '职位'
)comment '工作经历';

```

### 实体类

```
package com.itheima.pojo;

import lombok.Data;

import java.time.LocalDate;

/**
 * 工作经历
 */
@Data
public class EmpExpr {
    private Integer id; //ID
    private Integer empId; //员工ID
    private LocalDate begin; //开始时间
    private LocalDate end; //结束时间
    private String company; //公司名称
    private String job; //职位
}
```

```
package com.itheima.pojo;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class Emp {
    private Integer id; //ID,主键
    private String username; //用户名
    private String password; //密码
    private String name; //姓名
    private Integer gender; //性别, 1:男, 2:女
    private String phone; //手机号
    private Integer job; //职位, 1:班主任,2:讲师,3:学工主管,4:教研主管,5:咨询师
    private Integer salary; //薪资
    private String image; //头像
    private LocalDate entryDate; //入职日期
    private Integer deptId; //关联的部门ID
    private LocalDateTime createTime; //创建时间
    private LocalDateTime updateTime; //修改时间

    //封装部门名称数
    private String deptName; //部门名称
}

```

### 分页查询

![image.webp](https://imgbed.f3f3.top/file/picgo/1781941764600_image.webp)

```
package com.itheima.pojo;

import lombok.Data;

import java.util.List;
@Data
public class PageResult< T> {
    //定义格式进行封装
    private Long total;
    private List<T> rows;
    // 添加带参数的构造函数
    public PageResult(Long total, List<T> rows) {
        this.total = total;
        this.rows = rows;
    }
    // 无参构造函数
    public PageResult() {
    }
}

```

请求路径：/emps

请求方式：GET

请求参数：跟随在请求路径后的参数字符串。  例：/emps?page=1&pageSize=10

响应数据：json格式



![image.webp](https://imgbed.f3f3.top/file/picgo/1781942268802_image.webp)

#### 引入依赖

```
<!--分页插件PageHelper-->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.4.7</version>
</dependency>
```

#### Mapper

```
package com.itheima.mapper;
import com.itheima.pojo.Emp;
import com.itheima.pojo.EmpQueryParam;
import com.itheima.pojo.JobOption;
import com.itheima.pojo.Result;
import org.apache.ibatis.annotations.*;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

//mybatis操作数据库员工基本信息
//查询总记录数
@Mapper
public interface EmpMapper {
    //原始方法
//    @Select("select count(*) from emp e left join dept d on e.dept_id =d.id ")
//    public Long count();
//    //分页查询 记录起始索引，每页记录数
//    @Select("select e.*,d.name from emp e left join dept d " +
//            "on e.dept_id =d.id limit #{start},#{pageSize}  ")
//    public List<Emp> list(Integer start, Integer pageSize);

   //利用pagehelper分页插件简化书写
@Select("select e.*,d.name from emp e left join dept d "+"on e.dept_id =d.id  ")

```

#### Controller

```
@Slf4j
@RequestMapping("/emps")
@RestController
public class EmpController {
    @Autowired
    private EmpService empService;

*分页查询
@GetMapping
public Result page(Integer page, Integer pageSize){
log.info("分页查询：{},{}"，page，pagesize)；
PageResult<Emp> pageResult = empService.page(page, pagesize);
return Result.success(pageResult);
    
```

#### Service

```
@Slf4j
@Service
public class EmpServiceImpl implements EmpService {
    @Autowired
    private EmpMapper empMapper;
    @Autowired
    private EmpExprMapper empExprMapper;
    @Autowired
    private EmpLogService empLogService;


    //    @Override
//    public PageResult<Emp> page(Integer page, Integer pageSize) {
//        //查询总记录数
//        Long total = empMapper.count();
//        //计算起始索引
//        Integer start = (page - 1) * pageSize;
//        List<Emp> rows = empMapper.list(start, pageSize);
//        return new PageResult<Emp>(total, rows);
//    }
    // 利用pagehelper分页插件简化书写
    @Override
    public PageResult<Emp> page(page,pageSize) {
        //设置分页参数
     PageHelper.startPage(page,pageSize);
     //存入ThreadLocal线程局部变量绑定当前线程
        
        //执行查询
        List<Emp> list = empMapper.list();
        //自定义拦截器Mybatis的Executor.query执行点
        //拼接分页语句limit ?,?
        //同时执行count(*)语句
        
        //page是arraylist 的子类，自带参数
        //将普通的list包装成Mybatis的page对象
        //ThreadLocal清理分页参数,避免下次查询污染
        Page<Emp> p = (Page<Emp>) list;//与pagehelper一起使用
        
        
        
        return new PageResult<>(p.getTotal(), p.getResult());
    }
```

- PageHelper实现分页查询时，SQL语句的结尾一定不要加分号(;).。

- PageHelper只会对紧跟在其后的第一条SQL语句进行分页处理。

- pagehelper是对原有的sql语句进行拦截改造拼接 多态编译page类，执行右边查询进行封装强转

PageHelper在进行分页查询时，会执行上述两条SQL语句，并将查询到的总记录数，与数据列表封装到了 `Page<Emp>` 对象中，我们再获取查询结果时，只需要调用Page对象的方法就可以获取。

### 条件查询









#### 动态sql







## 登录认证
