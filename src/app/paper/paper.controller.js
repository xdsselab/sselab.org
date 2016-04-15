'use strict';

angular.module("sselabWebApp").controller("PaperCtrl", function ($scope, $location, $http) {
  $scope.papers = [
    {"title": "Liang Bao, Chao Yin, Weigang He, Jun Ge and Ping Chen. Extracting Reusable Services from Legacy Object-oriented Systems. International Conference on Software Maintenance (ICSM), Romania, 2010", "url": ""},
    {"title": "鲍亮，陈胜，宋胜利等. BPEL流程静态优化技术研究，西安电子科技大学学报. Vol. 37, No.7, 2010. (EI: 20101612868397)", "url": ""},
    {"title": "鲍亮, 宋胜利, 陈胜等. BPEL中的静态流程切片技术研究, 系统工程与电子技术. Vol.30, No. 12, 2008, 12.(EI:20090811917532)", "url": ""},
    {"title": "Liang Bao, Sheng Chen, et.al. Towards a Reversible BPEL Debugger. International Conference on Web Services (ICWS), Beijing, 2008. (EI: 085211814345)", "url": ""},
    {"title": "Liang Bao, Sheng Chen, et.al. Batch Invocation of Web Services in BPEL Process. International Conference on Service-Oriented Computing, Sydney. 2008. (EI: 090111836581)", "url": ""},
    {"title": "鲍亮, 陈平. 基于插件技术的异构数据集成. 计算机工程, 第32卷, 第20期, 2006. (EI: 065110321556)", "url": ""},
    {"title": "Qian Li, Linyan Sun, Liang Bao. Enhanced index tracking based on multi-objective immune algorithm. Expert Systems with Applications. 2011, 38: 6101-6106.", "url": ""},
    {"title": "李倩，孙林岩，鲍亮.基于免疫记忆克隆算法的指数化投资组合构建策略[J]. 运筹与管理，2009, 18(6):117-125.", "url": ""},
    {"title": "Qian Li, Liang Bao. A Network Analysis of Contagion in the Crash of Financial Markets, Expert Systems with Applications (Submitted).", "url": ""},
    {"title": "陈胜, 鲍亮，陈平等. BPEL流程数据竞争和死锁检测算法研究, 西安电子科技大学学报. 2008 35 (6): 1056-1062. (EI: 20090311859904)", "url": ""},
    {"title": "Sheng Chen, Liang Bao and Ping Chen. Optbpel: A tool for performance optimization of bpel process. Lecture Notes on Computer Science, Springer-Verlag Berlin Heidelberg. 2008. (EI: 081511189982)", "url": ""},
    {"title": "Zhang Bo, Bao Liang, Zhou Rumin, Hu Shengming, Chen Ping. A Black-Box strategy to Migrate GUI-based Legacy Systems to Web Services. The Fourth IEEE International Symposium on Service-Oriented System Engineering. 2005.(EI: 20091211969438)", "url": ""},
    {"title": "Qishi Wu, YiGu, LiangBao, WeiJia, Huichen Dai and Ping Chen. Optimizing Distributed Execution of WS-BPEL Processes in Heterogeneous Computing Environments. N. Bartolini et al. (Eds.): QShine/AAA-IDEA 2009, LNICST 22, pp. 770", "url": ""}
  ];
});
