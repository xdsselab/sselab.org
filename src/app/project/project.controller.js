'use strict';

angular.module("sselabWebApp").controller("ProjectCtrl", function ($scope, $location, $http) {
  $scope.projects = [
    {"title": "国家自然科学基金项目：公有云计算服务组合系统收益优化技术研究", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "“十二五”预研项目：服务化系统集成工具技术研究", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "研究所横向科研项目：服务集成平台", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "研究所横向科研项目：云计算软件", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "研究所横向科研项目：海量格式报文存储与检索平台", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "研究所横向科研项目：基于海量日志信息的软件故障检测平台", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "企业联合研究项目：基于SSD的NoSQL数据库优化研究", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "研究所横向科研项目：仿真服务门户系统", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "研究所横向科研项目：服务资源管理工具", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "研究所横向科研项目：电子文档标准化检查工具", "url": "#/project", "image": "assets/images/project.jpg"},
    {"title": "高等学校科研基本业务费项目：组合服务执行优化技术研究", "url": "#/project", "image": "assets/images/project.jpg"}
  ];
});
