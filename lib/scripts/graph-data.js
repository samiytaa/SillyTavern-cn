let graphData={graphOptions:{attractionForce:1,linkLength:10,repulsionForce:150,centralForce:3,edgePruning:100,minNodeRadius:3,maxNodeRadius:7},isInitialized:!0,paths:["sillytavern/1-安装/1-安装.html","sillytavern/1-安装/1.1-windows.html","sillytavern/1-安装/1.2-linux-和-mac.html","sillytavern/1-安装/1.3-android.html","sillytavern/1-安装/1.4-docker.html","sillytavern/1-安装/1.5-更新.html","sillytavern/1-安装/1.5.1-迁移指南-1.12.0.html","sillytavern/1-安装/1.5.2-迁移指南-1.9.0.html","sillytavern/1-安装/在android上使用termux本地安装和运行sillytavern.html","sillytavern/2-使用指南/2-使用指南.html","sillytavern/2-使用指南/2.1-快速入门.html","sillytavern/2-使用指南/2.2-常见问题.html","sillytavern/2-使用指南/2.3-聊天指南.html","sillytavern/2-使用指南/2.3.1-斜杠命令.html","sillytavern/2-使用指南/2.3.2-热键.html","sillytavern/2-使用指南/2.4-通用设置.html","sillytavern/2-使用指南/2.5-api-连接.html","sillytavern/2-使用指南/2.5.1-连接配置文件.html","sillytavern/2-使用指南/2.5.2-自托管ai模型.html","sillytavern/2-使用指南/2.5.3-聊天补全（chat-completion）.html","sillytavern/2-使用指南/2.5.4-openrouter.html","sillytavern/2-使用指南/2.5.5-dreamgen.html","sillytavern/2-使用指南/2.5.6-koboldai-horde.html","sillytavern/2-使用指南/2.5.7-koboldcpp.html","sillytavern/2-使用指南/2.5.8-mancer.html","sillytavern/2-使用指南/2.5.9-novelai.html","sillytavern/2-使用指南/2.5.10-scale.html","sillytavern/2-使用指南/2.5.11-tabbyapi.html","sillytavern/2-使用指南/2.6-提示词（prompt）.html","sillytavern/2-使用指南/2.6.1-高级格式化.html","sillytavern/2-使用指南/2.6.2-上下文模板.html","sillytavern/2-使用指南/2.6.3-指令模式.html","sillytavern/2-使用指南/2.6.4-分词器（tokenizer）.html","sillytavern/2-使用指南/2.6.5-cfg.html","sillytavern/2-使用指南/2.6.6-提示管理器.html","sillytavern/2-使用指南/2.7-世界书（world-info）.html","sillytavern/2-使用指南/2.8-用户设置.html","sillytavern/2-使用指南/2.8.1-ui-自定义.html","sillytavern/2-使用指南/2.8.2-视觉小说-(vn)-模式.html","sillytavern/2-使用指南/2.9-角色设置.html","sillytavern/2-使用指南/2.9.1-角色设计.html","sillytavern/2-使用指南/2.9.2-聊天文件管理.html","sillytavern/2-使用指南/2.9.3-群聊.html","sillytavern/2-使用指南/2.9.4-标签.html","sillytavern/2-使用指南/2.9.5-作者注释.html","sillytavern/2-使用指南/2.9.6-数据库（rag）.html","sillytavern/3-扩展功能/3-扩展功能.html","sillytavern/3-扩展功能/3.1-blip.html","sillytavern/3-扩展功能/3.2-聊天翻译.html","sillytavern/3-扩展功能/3.3-聊天向量化.html","sillytavern/3-扩展功能/3.4-动态音频.html","sillytavern/3-扩展功能/3.5-emulatorjs.html","sillytavern/3-扩展功能/3.6-表情图像（头像）.html","sillytavern/3-扩展功能/3.7-图像描述.html","sillytavern/3-扩展功能/3.8-图像生成.html","sillytavern/3-扩展功能/3.9-live2d.html","sillytavern/3-扩展功能/3.10-目标功能.html","sillytavern/3-扩展功能/3.11-基于检索的语音转换-(rvc).html","sillytavern/3-扩展功能/3.12-语音识别.html","sillytavern/3-扩展功能/3.13-总结（summarize）.html","sillytavern/3-扩展功能/3.14-文本转语音-(tts).html","sillytavern/3-扩展功能/3.15-alltalk-tts-v2.html","sillytavern/3-扩展功能/3.16-xtts-语音克隆.html","sillytavern/3-扩展功能/3.17-vrm.html","sillytavern/3-扩展功能/3.18-网页搜索.html","sillytavern/3-扩展功能/3.19-extras.html","sillytavern/3-扩展功能/3.19.1-通过-colab-运行附加功能.html","sillytavern/3-扩展功能/3.19.2-本地安装.html","sillytavern/3-扩展功能/3.19.2.1-常见问题.html","sillytavern/3-扩展功能/3.19.3-智能上下文.html","sillytavern/3-扩展功能/3.19.4-talkinghead.html","sillytavern/4-开发与自动化/4-开发与自动化.html","sillytavern/4-开发与自动化/4.1-stscript-语言参考.html","sillytavern/4-开发与自动化/4.2-函数调用.html","sillytavern/4-开发与自动化/4.3-ui-扩展.html","sillytavern/4-开发与自动化/4.4-服务器插件.html","sillytavern/4-开发与自动化/4.5-国际化-(i18n).html","sillytavern/5-管理/5-管理.html","sillytavern/5-管理/5.1-配置文件.html","sillytavern/5-管理/5.2-多用户模式.html","sillytavern/5-管理/5.3-单点登录-(sso).html","sillytavern/5-管理/5.4-远程连接.html","sillytavern/5-管理/5.5-vpn-和隧道.html","sillytavern/5-管理/5.6-反向代理.html","sillytavern/6-许可证与版权.html","sillytavern/什么是sillytavern？.html","sillytavern/sillytavern官网wiki汉化.html","sillytavern/sillytavern设置中文.html"],nodeCount:88,linkSources:[0,0,0,0,0,1,3,5,5,5,5,7,9,9,9,9,9,9,9,9,9,10,10,10,11,12,12,12,12,12,12,12,12,12,12,12,12,12,16,16,16,16,16,16,16,16,16,16,16,16,19,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,30,30,31,31,34,34,34,35,36,36,36,36,36,36,36,36,36,37,37,39,39,39,39,39,39,39,39,41,45,45,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,49,49,50,53,53,53,54,65,65,65,65,67,71,71,71,71,71,72,73,73,77,77,77,77,77,77,78,78,78,78,78,78,80,80,80,81,82,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85],linkTargets:[1,2,3,4,5,16,8,0,1,6,7,5,10,12,11,16,15,28,35,36,39,87,0,12,3,16,48,13,14,37,54,60,45,9,44,33,42,41,87,19,21,24,25,17,18,20,22,23,26,27,16,40,36,35,45,59,64,73,29,34,30,44,41,31,32,33,28,34,30,32,34,29,34,29,28,29,15,45,37,38,48,5,79,40,15,11,12,38,36,43,40,35,28,44,42,41,45,42,64,49,48,53,54,52,59,49,60,61,62,72,47,50,51,55,56,57,58,63,64,65,45,59,52,54,78,16,16,66,67,69,70,68,72,73,74,75,76,35,54,64,79,81,82,83,78,80,81,79,80,46,75,16,36,79,81,82,81,0,1,2,3,4,16,40,29,35,42,74,36,45,13,72,52,59,48,54,60,64],labels:["1 安装","1.1 Windows","1.2 Linux 和 Mac","1.3 Android","1.4 Docker","1.5 更新","1.5.1 迁移指南 1.12.0","1.5.2 迁移指南 1.9.0","在Android上使用Termux本地安装和运行SillyTavern","2 使用指南","2.1 快速入门","2.2 常见问题","2.3 聊天指南","2.3.1 斜杠命令","2.3.2 热键","2.4 通用设置","2.5 API 连接","2.5.1 连接配置文件","2.5.2 自托管AI模型","2.5.3 聊天补全（Chat Completion）","2.5.4 OpenRouter","2.5.5 DreamGen","2.5.6 KoboldAI Horde","2.5.7 KoboldCpp","2.5.8 Mancer","2.5.9 NovelAI","2.5.10 Scale","2.5.11 TabbyAPI","2.6 提示词（Prompt）","2.6.1 高级格式化","2.6.2 上下文模板","2.6.3 指令模式","2.6.4 分词器（Tokenizer）","2.6.5 CFG","2.6.6 提示管理器","2.7 世界书（World Info）","2.8 用户设置","2.8.1 UI 自定义","2.8.2 视觉小说 (VN) 模式","2.9 角色设置","2.9.1 角色设计","2.9.2 聊天文件管理","2.9.3 群聊","2.9.4 标签","2.9.5 作者注释","2.9.6 数据库（RAG）","3 扩展功能","3.1 Blip","3.2 聊天翻译","3.3 聊天向量化","3.4 动态音频","3.5 EmulatorJS","3.6 表情图像（头像）","3.7 图像描述","3.8 图像生成","3.9 Live2D","3.10 目标功能","3.11 基于检索的语音转换 (RVC)","3.12 语音识别","3.13 总结（Summarize）","3.14 文本转语音 (TTS)","3.15 AllTalk TTS V2","3.16 XTTS 语音克隆","3.17 VRM","3.18 网页搜索","3.19 Extras","3.19.1 通过 Colab 运行附加功能","3.19.2 本地安装","3.19.2.1 常见问题","3.19.3 智能上下文","3.19.4 TalkingHead","4 开发与自动化","4.1 STscript 语言参考","4.2 函数调用","4.3 UI 扩展","4.4 服务器插件","4.5 国际化 (i18n)","5 管理","5.1 配置文件","5.2 多用户模式","5.3 单点登录 (SSO)","5.4 远程连接","5.5 VPN 和隧道","5.6 反向代理","6-许可证与版权","什么是SillyTavern？","SillyTavern官网wiki汉化","SillyTavern设置中文"],radii:[5.902494331065759,4.678004535147393,3.895691609977324,4.678004535147393,3.895691609977324,5.638888888888889,3.462018140589569,3.895691609977324,3.462018140589569,6.344671201814059,4.678004535147393,4.301020408163265,6.99092970521542,3.895691609977324,3.462018140589569,4.301020408163265,7,3.462018140589569,3.462018140589569,3.895691609977324,3.462018140589569,3.462018140589569,3.462018140589569,3.462018140589569,3.462018140589569,3.462018140589569,3.462018140589569,3.462018140589569,7,6.137755102040817,4.678004535147393,4.301020408163265,3.895691609977324,3.895691609977324,5.638888888888889,5.346938775510204,6.888888888888889,4.678004535147393,3.895691609977324,6.137755102040817,4.678004535147393,4.678004535147393,4.678004535147393,3.462018140589569,4.301020408163265,5.902494331065759,7,3.462018140589569,4.678004535147393,4.678004535147393,3.895691609977324,3.462018140589569,4.301020408163265,4.678004535147393,5.346938775510204,3.462018140589569,3.462018140589569,3.462018140589569,3.462018140589569,4.678004535147393,4.301020408163265,3.462018140589569,3.462018140589569,3.462018140589569,5.0266439909297045,5.0266439909297045,3.462018140589569,3.895691609977324,3.462018140589569,3.462018140589569,3.462018140589569,5.0266439909297045,4.678004535147393,4.678004535147393,3.895691609977324,3.895691609977324,3.462018140589569,5.346938775510204,5.902494331065759,4.678004535147393,5.0266439909297045,5.0266439909297045,4.301020408163265,3.462018140589569,3,7,3,3.895691609977324],linkCount:178}