## 简介
该系列实验旨帮助用户快速上手AWS IoT

## 动手实验

### 1. IoT Core 实验1
实验目的：熟悉使用IoT Core组件，设备接入，消息分发，设备认证

AWS组件：
* Device Gateway, Message Broker
* Device Certificate, IoT Policy
* AWS IoT Test Tool
  
交流内容：
* 在实际生产中的证书下发问题
* Registry, Thing Type, Thing Group
* CA, Role Aliases, Authorizer
* JITP, JITP, CVM

### 2. IoT Core 实验2
实验目的：熟悉IoT Core Rule Engine, 将数据导入到DynamoDB

AWS组件：
* IoT Core Rule Engine
* Shadow
* DynamoDB
* IAM Role

交流内容：
* 如何进行自定义的身份认证(Custom Authorizer)
* LTW

### [3. IoT Greengrass实验](lab3.greengrass.md)
实验目的：熟悉Greengrass在智能家居中的网关作用, Local Message Routing

AWS组件：
* IoT Greengrass Core
* IoT Greengrass Group

交流内容：
* 如何进行合理的权限设计
* 如何进行设备分享

### [4. Alexa与AWS IoT的集成](lab4.Alexa.md)
实验目的：通过Alexa 对智能灯泡，空气净化器进行语音控制

AWS组件：
* Alexa Skill Set
* Alexa Smart Home
* Lambda
* IoT Core

交流内容：
* 利用Echo/Amazon生态加速全球化布局

### 5. AWS IoT与Cognito的集成
实验目的：了解AWS IoT中的权限控制

AWS组件：
* IoT Core Policy
* IAM Policy
* Cognito User Pool

### 6. IoT Analytics 数据分析实验
实验目的：熟悉使用 IoT Analytics 进行数据的收集、清洗、分析、可视化

AWS组件：
* IoT Core Rule Engine
* IoT Analytics Channel, Pipeline, Data Store, Data Set
* QuickSight
  
交流内容：
* 如何利用IoT Analytics API从其他途径导入数据

### 7. IoT 设备管理
实验目的：熟悉IoT Device Manament, OTA

AWS组件：
* Thing Type, Thing Group
* Jobs

交流内容：
* 海量设备的管理

### 8. IoT AI on Greengrass
实验目的：使用SageMaker完成机器学习，然后将Model下发给Greengrass

AWS组件：
* SageMaker
* Greengrass

交流内容：
* AI 技术在IoT的常见应用场景
