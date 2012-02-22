var Cackle=(function(){var F;
var B="cackle.ru";
var C="43c857a77025";
var D=(typeof mcJqueryOff!="undefined")?mcJqueryOff:false;
function E(){F=window.jQuery.noConflict(true);
A()
}var A=function A(){F(document).ready(function(L){F(document).unbind(".cackle");
var a={header:"Добавить комментарий",from:"от имени",logout:"Выход",placeholder:"Оставьте свой комментарий",submit:"Опубликовать",socialSubmit:"разрешить публиковать в",commentCount:"Комментариев",commentLoading:"Загрузка комментариев",rating:"Рейтинг комментария",ratingUp:"Нравится комментарий",ratingDown:"Не нравится комментарий",answer:"ответить"};
var c={google:{name:"Google",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=https://www.google.com/accounts/o8/id"},googleplus:{name:"Google+",url:"http://"+B+"/signin/google/proxy?scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email"},yahoo:{name:"Yahoo",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://me.yahoo.com/"},yandex:{name:"Яндекс",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://openid.yandex.ru"},vkontakte:{name:"Вконтакте",url:"http://"+B+"/signin/vkontakte/proxy?scope=+1024"},facebook:{name:"Facebook",url:"http://"+B+"/signin/facebook/proxy?scope=email,status_update,offline_access"},twitter:{name:"Twitter",url:"http://"+B+"/signin/twitter/proxy"},mymailru:{name:"Мой Мир@Mail.Ru",url:"http://"+B+"/signin/mailru/proxy?scope=stream"},odnoklassniki:{name:"Одноклассники",url:"http://"+B+"/signin/odnoklassniki/proxy"},mailru:{name:"Mail.Ru",label:"Введите ваше имя пользователя на Mail.ru",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://{username}.id.mail.ru/&openid_username={username}"},rambler:{name:"Рамблер",label:"Введите ваше имя пользователя на Рамблер",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://id.rambler.ru/users/{username}&openid_username={username}"},myopenid:{name:"MyOpenID",label:"Введите ваше имя пользователя на MyOpenID",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://{username}.myopenid.com/&openid_username={username}"},livejournal:{name:"Живой Журнал",label:"Введите ваше имя в Живом Журнале",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://{username}.livejournal.com/&openid_username={username}"},flickr:{name:"Flickr",label:"Введите ваше имя на Flickr",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://flickr.com/{username}/&openid_username={username}"},wordpress:{name:"Wordpress",label:"Введите ваше имя на Wordpress.com",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://{username}.wordpress.com/&openid_username={username}"},blogger:{name:"Blogger",label:"Ваш Blogger аккаунт",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://{username}.blogspot.com/&openid_username={username}"},verisign:{name:"Verisign",label:"Ваше имя пользователя на Verisign",url:"http://"+B+"/j_spring_openid_security_check_mc?openid_identifier=http://{username}.pip.verisignlabs.com/&openid_username={username}"}};
var I=null;
var N="0";
var e="";
var J="32";
var V=null;
var Y=true;
var b=true;
var X=0;
var S=(typeof mcLocale!="undefined")?"&locale="+mcLocale:"";
var O=false;
L.getJSON("http://"+B+"/widget/"+mcSite+"/setting?callback=?"+S,function(g){var f=g.setting;
I=L.extend(a,g.messages);
N=f.paginationSize||N;
e=(typeof mcProviders!="undefined")?mcProviders:f.providers;
J=f.avatarSize||J;
V=f.mcHeader||I.header;
Y=f.urlRecogn;
b=f.anonym===undefined||f.anonym;
X=f.level===undefined?0:f.level;
c.yandex.name=I.yandex;
c.vkontakte.name=I.vkontakte;
c.mymailru.name=I.mymailru;
c.odnoklassniki.name=I.odnoklassniki;
c.mailru.label=I.mailruLabel;
c.rambler.name=I.rambler;
c.rambler.label=I.ramblerLabel;
c.myopenid.label=I.myopenidLabel;
c.livejournal.name=I.livejournal;
c.livejournal.label=I.livejournalLabel;
c.flickr.label=I.flickrLabel;
c.wordpress.label=I.wordpressLabel;
c.blogger.label=I.bloggerLabel;
c.verisign.label=I.verisignLabel;
P.init();
W.init();
T.init();
M.init();
Z.init();
Q.init()
});
var H=(typeof customProviders!="undefined")?L.extend(c,customProviders):c;
var P={containerId:"#mc-container",openidContainers:".mc-openid-container",avatarContainerId:"#mc-avatar-container",authorImgId:"mc-author-img",anonymGravatar:"http://gravatar.com/avatar/00000000000000000000000000000000?d=mm",init:function(){this.loadCss();
this.loadHtml();
L("#mc-message").bind("keyup",Z.textareaAutoResize)
},loadCss:function(){var f=L("<link>",{rel:"stylesheet",type:"text/css",href:"http://"+B+"/static/style/comment-min.css?v="+C});
f.appendTo("head")
},loadHtml:function(){var f=L("<div/>",{id:"mc-content"});
f.html('<div class="mc-openid-container mc-openid-main"><span class="mc-openid-lable">'+I.from+'</span></div><div id="mc-openid-input-area"></div><div><div id="mc-avatar-container"></div><div id="mc-popup"><div class="mc-popup-top"><h4>'+I.popupHeader+'</h4><span id="popupClose" title="'+I.popupClose+'"></span></div><div id="mc-popup-main"><p>'+I.popupBody+':</p><div class="mc-openid-container mc-openid-popup"></div><div id="mc-openid-input-popup"></div></div></div><div id="mc-dialog"><div class="mc-popup-top"><h4></h4><span id="dialogClose"></span></div><div id="mc-dialog-main"></div></div><div id="mc-text-container"><div class="mc-text-box"><div class="mc-text-child"><textarea id="mc-message" name="mc-message" placeholder="'+I.placeholder+'"></textarea></div></div><div class="mc-submit-box"><span id="mc-social-submit" style="display:none;"><table><tbody><tr><td><input id="mc-social-check" type="checkbox" checked="checked"/></td><td><label for="mc-social-check">'+I.socialSubmit+' </label></td><td><span id="mc-social-icon"/></td></tr></tbody></table></span><button id="mc-submit" class="mc-button">'+I.submit+'</button></div><div class="mc-info-box"><h4>'+I.commentCount+': <span id="mc-count">0</span></h4><div id="mc-wait"><img src="http://'+B+'/static/images/load-avatar.gif"/><span>'+I.commentLoading+'...</span></div></div></div><div id="mc-comments"><ul id="mc-comment-list"></ul></div><div id="mc-pagination"><img id="mc-next-wait" src="http://'+B+'/static/images/load-avatar.gif"/><button id="mc-next" class="mc-button" title="0">'+I.nextComments+"</button></div></div>");
if(L("#mc-link").length==0){L("#mc-wait",f).before('<h6>powered by <a href="http://cackle.ru"><b style="color:#4FA3DA">CACKL</b><b style="color:#F65077">E</b></a></h6>')
}if(V){f.prepend(L("<h3></h3>").text(V))
}this.buildProviders(L(this.openidContainers,f));
this.buildAvatar(L(this.avatarContainerId,f),function(){U.init()
});
L(this.containerId).html(f);
if(b){L("#mc-popup-main",f).append(this.buildAnonym());
this.initCaptcha()
}this.initSocialCheck()
},buildAnonym:function(){return'<div id="mc-captcha-container">'+I.popupOr+' <span id="mc-captcha" class="mc-as-link">'+I.anonymLogin+'</span><div id="mc-captcha-content"><table><tbody><tr><td class="mc-anonym-lable">'+I.anonymName+'</td><td><input type="text" id="mc-anonym-name" name="name"/></td></tr><tr><td class="mc-anonym-lable">'+I.anonymEmail+'</td><td><input type="text" id="mc-anonym-email" name="email"/></td></tr></tbody></table><div id="mc-google-captcha"></div><button id="mc-anonym-submit" class="mc-button">'+I.submit+"</button></div></div>"
},buildProviders:function(f){L.each(e.split(";"),function(g,j){if(H[j]){L(f).each(function(){L(this).append('<span class="mc-provider mc'+j+'" name="'+j+'" title="'+H[j].name+'"/>')
})
}})
},buildAvatar:function(g,j){var i=this,f="http://"+B+"/widget/"+mcSite+"/avatar?callback=?";
L.getJSON(f,function(k){g.html(i.buildAvatarImg(k.avatarSrc,k.id,i.authorImgId,36));
if(k.id>0){if(k.social){i.displaySocialCheck(g.parents("#mc-content"),k.social)
}else{L("#mc-social-submit").hide()
}g.append('<br/><span id="mc-logout">'+I.logout+"</span>");
L("#mc-logout").click(function(){T.logoutWindow(T);
L("#mc-social-submit").hide()
})
}O=k.siteAdmin;
if(j){j(k)
}})
},buildAuthor:function(g,i){var f=L("<div/>").addClass("mc-comment-author");
if(i){var j;
if(i.match("^https?://")){j=i
}else{j="http://"+i
}username=L("<a/>",{href:j}).text(g);
f.append(username)
}else{f.text(g)
}return f
},buildAvatarImg:function(k,j,g,i){var f,l,n=i||J;
if(g){f=L("<img/>",{id:g})
}else{f=L("<img/>")
}if(k.indexOf("http://gravatar.com/")==0){l=k+"&s="+n
}else{l=k
}f.addClass("mc-avatar-img").attr({src:l,alt:j,height:n,width:n});
return f
},buildVote:function(j){var i="mc-rating"+j.id,g=L("<td/>",{id:i,title:I.rating}),f=L('<div class="mc-comment-vote"><table><tbody><tr><td class="mc-comment-like"><a href="http://'+B+"/widget/comment/"+j.id+'/vote/up" class="mc-vote"><img title="'+I.ratingUp+'" alt="'+I.ratingUp+'" src="http://'+B+'/static/images/vote_up.png"/></a></td><td class="mc-comment-unlike"><a href="http://'+B+"/widget/comment/"+j.id+'/vote/down" class="mc-vote"><img title="'+I.ratingDown+'" alt="'+I.ratingDown+'" src="http://'+B+'/static/images/vote_down.png"/></a></td></tr></tbody></table></div>');
this.changeRating(g,j.rating);
L("table tr",f).prepend(g);
return f
},changeRating:function(f,i){var g="comment-rating-zero";
if(i>0){g="comment-rating-plus";
i="+"+i
}else{if(i<0){g="comment-rating-neg"
}}f.attr("class","");
f.addClass(g);
f.text(i)
},buildHeader:function(j){var o=L("<table/>"),i=L("<tbody/>"),k=L("<tr/>"),g=L("<td/>").addClass("mc-avatar-td"),p=L("<td/>").addClass("mc-author-td"),l=L("<td/>").addClass("mc-vote-td"),n=L("<span/>").addClass("mc-provider-img"),f=L("<a/>",{href:"javascript:"}).addClass("mc-avatar-link");
o.append(i.append(k));
if(j.author){f.append(this.buildAvatarImg(j.author.avatarSrc,j.author.id));
g.append(f);
if(j.author.provider){n.addClass("mc-"+j.author.provider);
g.append(n)
}p.append(this.buildAuthor(j.author.name,j.author.www))
}else{f.append(this.buildAvatarImg(this.anonymGravatar,0));
g.append(f);
p.append(this.buildAuthor(j.commentInfo.anonym.name))
}l.append(this.buildVote(j));
k.append(g);
k.append(p);
k.append(l);
return o
},buildFooter:function(k,j){var g=Z.getTimeAgo(k.creationDate,I),i=L('<div class="mc-footer"></div>'),f='<div class="mc-timeago-box"><a href="'+this.buildCommentUrl(k.id)+'">'+g+"</a></div>";
if((X==0||j<X)&&k.status==="APPROVED"){i.append('<div class="mc-answer-btn"><a class="mc-answer" href="#">'+I.answer+"</a></div>")
}i.append(f);
K.addToolbar(i,k);
return i
},buildCommentUrl:function(g){var f=Z.getBeforeAnchor(window.location.href);
return f+"#mc-"+g
},appendComment:function(i,g,r,f){f=typeof (f)!="undefined"?f:0;
if(L("#mc-"+i.id).length>0){return 
}var k=L("<div/>").addClass("mc-user-box"),q=L("<div/>").addClass("mc-comment-message"),o=L("<div/>",{id:"mc-"+i.id+"-footer"}).html(this.buildFooter(i,f)),j=L("<div/>"),p=L("<li/>",{id:"mc-"+i.id});
k.append(this.buildHeader(i));
q.text(i.message);
if(Y){html=q.html();
q.html(Z.replaceURLWithHTMLLinks(html))
}j.append(k);
j.append(q);
j.append(o);
if(i.status){j.addClass(i.status)
}p.html(j);
if(r){p.hide();
g.prepend(p);
p.slideDown("slow")
}else{g.append(p)
}if(i.answer&&i.answer.length>0){var l=this;
var n=L("<ul/>").addClass("mc-comment-child");
L(i.answer).each(function(){l.appendComment(this,n,null,f+1)
});
p.append(n)
}},updateCommentStatus:function(j){var f=L("#mc-"+j.id),g=f.children("div");
if(j.status){g.attr("class",j.status)
}if(j.answer&&j.answer.length>0){var i=this;
L(j.answer).each(function(){i.updateCommentStatus(this)
})
}},initCaptcha:function(){L.getScript("http://www.google.com/recaptcha/api/js/recaptcha_ajax.js",function(f,g){Recaptcha.create("6LffWskSAAAAAAlOskeXehF-XCI1d8fKv1R9xVY-","mc-google-captcha",{theme:"clean",callback:Recaptcha.focus_response_field})
})
},initSocialCheck:function(){L("#mc-social-check").click(function(){var f="mc-submit-"+L("#mc-social-icon").attr("title");
if(L(this).is(":checked")){R.create(f,"on",365)
}else{R.create(f,"off",365)
}})
},displaySocialCheck:function(g,l){var i=R.read("mc-submit-"+l),f=L("#mc-social-check",g),j=L("#mc-social-icon",g),k=L("#mc-social-submit",g);
if(!i||i=="on"){f.attr("checked","checked")
}else{f.removeAttr("checked")
}j.attr("class","mc"+l+"-post");
j.attr("title",l);
k.show()
}};
var U={channel:"",popup:"",anonymSubmit:"",messageTextArea:"",init:function(){this.initChannel();
this.initElements();
this.recive();
L("#mc-submit").live("click.cackle",L.proxy(this.clickBySubmit,this));
L(".mc-answer-btn button").live("click.cackle",L.proxy(this.clickByAnswerSubmit,this));
L(".mc-vote").live("click.cackle",this.vote);
L(".mc-answer").live("click.cackle",this.answerShow);
L(".mc-avatar-img").live("click.cackle",this.getKarmaGraph);
L("#mc-captcha").live("click.cackle",this.showCaptcha);
L("#mc-comment-list li div").live("mouseover.cackle",this.showModerateLink);
L("#mc-comment-list li div").live("mouseout.cackle",this.hideModerateLink)
},initChannel:function(){var f=window.location.href;
if(typeof mcChannel=="undefined"||(typeof mcChannel=="string"&&mcChannel.match(f))){this.channel=Z.getBeforeAnchor(f)
}else{this.channel=mcChannel
}},initElements:function(){this.popup=L("#mc-popup");
this.anonymSubmit=L("#mc-anonym-submit");
this.messageTextArea=L("#mc-message")
},isAnonym:function(){return L("#mc-author-img").attr("alt")==0
},clickBySubmit:function(g){var f=L(g.target),k=this;
if(this.isAnonym()){if(!this.popup.is(":visible")){var j=(L(window).height()/2)-(175/2);
var i=(L(window).width()/2)-(462/2);
this.popup.attr("style","display:block;top:"+j+"px;left:"+i+"px;");
this.anonymSubmit.click(function(){k.submit(k,k.submitAnonymUrl,null,null,null,null,function(){T.closePopup()
},function(){Recaptcha.reload()
})
})
}}else{f.attr("disabled","disabled");
this.submit(this,this.submitUrl,null,null,null,null,null,function(){f.removeAttr("disabled");
k.messageTextArea.focus()
})
}},clickByAnswerSubmit:function(j){var i=L(j.target),n=i.parents("li").attr("id"),f=L("#"+n),g=L(f).find("ul.mc-comment-child")[0]?L(L(f).find("ul.mc-comment-child")[0]):L("<ul/>").addClass("mc-comment-child");
if(this.isAnonym()){if(!this.popup.is(":visible")){var l=(L(window).height()/2)-(175/2);
var k=(L(window).width()/2)-(462/2);
this.popup.attr("style","display:block;top:"+l+"px;left:"+k+"px;");
$this=this;
this.anonymSubmit.click(function(){$this.answerSubmit($this,n,$this.submitAnonymUrl,g,function(){T.closePopup();
L("#replay"+n).slideUp("slow");
if(!L(f).find("ul")[0]){f.append(g)
}},function(){Recaptcha.reload()
})
})
}}else{i.attr("disabled","disabled");
this.answerSubmit(this,n,this.submitUrl,g,function(){L("#replay"+n).slideUp("slow");
if(!L(f).find("ul")[0]){f.append(g)
}},function(){i.removeAttr("disabled")
})
}},recive:function(i){var g=this,f=this.reciveUrl(this.channel);
L.getJSON(f,function(j){var k=L("#mc-comment-list");
L("#mc-wait").hide();
L(j.comments).each(function(){P.appendComment(this,k)
});
L("#mc-count").text(j.size);
g.gotoComment();
if(N>0&&j.next!="false"){M.show()
}else{M.hide()
}if(i){i()
}})
},reRecive:function(){L("#mc-comment-list").empty();
this.recive()
},reciveUrl:function(i){var f=O?"/fullComments":"/comments",g="http://"+B+"/widget/"+mcSite+f+"?chan="+this.channel+"&callback=?";
if(N>0){var j=M.getPage();
g+="&page="+j+"&size="+N
}return g
},gotoComment:function(){var f=window.location.href;
if(f.indexOf("#mc-")>0){document.location.replace(f)
}},submit:function(n,o,u,p,i,q,s,r){var j=p?p:0,g=0,l=u?u:L("#mc-message").val(),t=i?i:L("#mc-comment-list"),k=q?q:L("#mc-message"),f=o(n,l,j);
if(j>0){g=L("#mc-"+p).parents("ul.mc-comment-child").length+1
}W.send(f.url,f.data,function(v){var z=L.parseJSON(v.data),AA=z.comment,x=z.size,w=z.error;
if(AA){if(s){s()
}P.appendComment(AA,t,true,g);
k.val("");
L("#mc-count").text(x)
}else{if(w){if(w==="commentPreModer"){k.val("")
}alert(I[w])
}}},function(v){},r)
},submitUrl:function(k,i,g){var f="http://"+B+"/widget/"+mcSite+"/createComment",j={loc:Z.getBeforeAnchor(window.location.href),chan:k.channel,msg:Z.escapeSpecialChars(i),parentId:0,social:""};
if(g>0){j.parentId=g
}if(L("#mc-social-submit:visible #mc-social-check:checked").length){j.social="on"
}return{url:f,data:j}
},submitAnonymUrl:function(k,i,g){var f="http://"+B+"/widget/"+mcSite+"/createComment",j={loc:Z.getBeforeAnchor(window.location.href),chan:k.channel,msg:Z.escapeSpecialChars(i),recaptcha_challenge_field:L("#mc-google-captcha #recaptcha_challenge_field").val(),recaptcha_response_field:L("#mc-google-captcha #recaptcha_response_field").val(),email:L("#mc-anonym-email").val(),name:L("#mc-anonym-name").val(),parentId:0};
if(g>0){j.parentId=g
}return{url:f,data:j}
},vote:function(){if(L("#mc-author-img").attr("alt")==0){return false
}var f=L(this).attr("href")+"?callback=?";
L.getJSON(f,function(g){if(g.rating){P.changeRating(L("#mc-rating"+g.id),g.rating)
}});
return false
},answerShow:function(){var i=L(this).parents("li").attr("id"),g=L("#"+i+"-footer"),f=g.find("#replay"+i)[0];
if(f&&!L(f).is(":hidden")){L(f).slideUp("slow")
}else{if(!f){f=L("<div/>",{id:"replay"+i}).addClass("mc-answer-box");
f.html('<div class="mc-text-box"><div class="mc-text-child"><textarea class="mc-answer-textarea"></textarea></div></div><div class="mc-answer-btn"><button class="mc-small-button">'+I.submit+"</button><div>");
g.append(f)
}L(f).slideDown("slow",function(){var j=L(".mc-answer-textarea");
L(j).bind("keyup",Z.textareaAutoResize);
j.focus()
})
}return false
},answerSubmit:function(i,g,j,f,o,n){var l=L("#replay"+g+" .mc-text-child textarea"),p=l.val(),k=g.replace("mc-","");
i.submit(i,j,p,k,f,l,o,n)
},getKarmaGraph:function(){var i=L(this),g=i.attr("alt"),f="http://"+B+"/widget/karma/"+g+"?callback=?";
L.getJSON(f,function(k){var n,q;
if(i.attr("id")==P.authorImgId){n=i.parent().parent();
q={top:"-60px"}
}else{n=L(i.parents(".mc-user-box")[0]);
q={top:"-140px"}
}var l=L(".mc-karma-graph",n)[0];
if(l&&L(l).length&&!L(l).is(":visible")){var j=L("p img",l);
j.attr("src",k.karma_graph);
L(l).fadeIn()
}else{var o=L("<div/>").addClass("mc-karma-graph").css(q),p='<p><img src="'+k.karma_graph+'"/></p>';
o.append(p);
n.prepend(o);
L(o).fadeIn()
}})
},showCaptcha:function(){var f=L("#mc-captcha-content");
if(f.is(":visible")){f.slideUp("slow")
}else{f.slideDown("slow")
}},showModerateLink:function(i){var j=L(i.target),f=L(j).parents("li")[0];
if(O){var g=L(".mc-footer .mc-moderate-box",f)[0];
L(g).show()
}},hideModerateLink:function(i){var j=L(i.target),f=L(j).parents("li")[0];
if(O){var g=L(".mc-footer .mc-moderate-box",f)[0];
L(g).hide()
}}};
var T={init:function(){L(".mc-openid-main .mc-provider").live("click.cackle",L.proxy(this.loginClick,this));
L(".mc-openid-popup .mc-provider").live("click.cackle",L.proxy(this.loginPopupClick,this));
L(".mc-login-input").live("click.cackle",L.proxy(this.loginInputClick,this));
L("#popupClose").live("click.cackle",this.closePopup)
},loginClick:function(g){var f=L(g.target),i=H[f.attr("name")];
if(i.label){if(L("#mc-openid-input-area").is(":visible")&&i.url==L(L(".mc-open-input")[0]).attr("title")){L("#mc-openid-input-area").slideUp("slow")
}else{L("#mc-openid-input-area").html(this.inputOpenid(i));
L("#mc-openid-input-area").slideDown("slow")
}}else{this.loginWindow(i.url)
}},loginPopupClick:function(g){var f=L(g.target),i=H[f.attr("name")];
if(i.label){L("#mc-openid-input-popup").html(this.inputOpenid(i));
L("#mc-openid-input-popup").slideDown("slow")
}else{L("#mc-openid-input-popup").slideUp("slow");
this.loginWindow(i.url)
}},loginInputClick:function(){var i=L(L(".mc-open-input")[0]).attr("title"),f=L(L(".mc-open-input")[0]).val(),g=i.replace("{username}",f);
this.loginWindow(g,f)
},inputOpenid:function(f){return"<p>"+f.label+'</p><input class="mc-open-input" type="text" title="'+f.url+'"/><input class="mc-login-input" type="submit" value="'+I.login+'"/>'
},loginWindow:function(j,g){var i=850,f=500;
this.waitAvatar();
openid_window=window.open(j,I.auth,"width="+i+",height="+f+",location=1,status=1,resizable=yes");
this.checkConnection(openid_window)
},logoutWindow:function(j){var g="http://"+B+"/j_spring_security_logout_mc",i=400,f=400;
j.waitAvatar();
openid_window=window.open(g,I.logout,"width="+i+",height="+f+",location=1,status=1,resizable=yes");
j.checkConnection(openid_window)
},checkConnection:function(g){var i=this;
function f(){if(g&&g.closed){P.buildAvatar(L(P.avatarContainerId),function(j){if(j.siteAdmin){U.reRecive()
}if(j.id>0){i.closePopup();
L("#mc-message").focus()
}})
}else{setTimeout(f,1000)
}}setTimeout(f,1000)
},waitAvatar:function(){L("#"+P.authorImgId).attr("src","http://"+B+"/static/images/load-avatar.gif")
},closePopup:function(){U.anonymSubmit.unbind("click");
L("#mc-popup").hide()
}};
var M={init:function(){L("#mc-next").click(L.proxy(this.next,this))
},setPage:function(f){return L("#mc-next").attr("title",f)
},getPage:function(){var f=L("#mc-next");
if(f.length){return parseInt(f.attr("title"))
}else{return 0
}},next:function(){L("#mc-next").hide();
L("#mc-next-wait").show();
this.setPage(this.getPage()+1);
U.recive(function(){L("#mc-next-wait").hide();
L("#mc-next").show()
})
},show:function(){L("#mc-pagination").show()
},hide:function(){L("#mc-pagination").hide()
}};
var Z={init:function(){this.initCloseEvent()
},initCloseEvent:function(){L(document).click(function(k){var g=L(k.target),j=L("#mc-openid-input-area"),o=g.parents("#mc-openid-input-area"),l=g.attr("id")==j.attr("id")||o.attr("id")==j.attr("id"),f=L(".mc-karma-graph"),n=g.parents("#mc-popup"),i=L("#mc-popup");
if(j&&j.is(":visible")&&!g.hasClass("mc-provider")&&!l){j.slideUp("slow")
}f.each(function(){if(L(this).is(":visible")){L(this).hide()
}});
if(g.attr("id")!="mc-submit"&&!g.hasClass("mc-small-button")&&!n.length&&i.is(":visible")){T.closePopup()
}})
},replaceURLWithHTMLLinks:function(j){var i=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,f=/(^|[^\/])(www\.[\S]+(\b|$))/ig,g=j.replace(i,'<a href="$1" target="_blank">$1</a>');
return g.replace(f,'$1<a href="http://$2" target="_blank">$2</a>')
},textareaAutoResize:function(){L(this).css("height","");
if(parseInt(L(this).css("min-height"))<this.scrollHeight){L(this).css("height",this.scrollHeight+"px")
}},getBeforeAnchor:function(f){if(f.indexOf("#")>0){return f.substring(0,f.indexOf("#"))
}else{return f.substring(0,f.length)
}},getAfterAnchor:function(f){return f.substring(f.indexOf("#"),f.length)
},escapeSpecialChars:function(g){var i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
i.lastIndex=0;
return i.test(g)?g.replace(i,function(j){var k=f[j];
return typeof k==="str"?k:"\\u"+("0000"+j.charCodeAt(0).toString(16)).slice(-4)
}):g
},getTimeAgo:function(k,j){var g=new Date().getTime(),f=g-k,i=f/1000;
m=i/60;
h=m/60;
d=h/24;
y=d/365;
if(i<45){return j.second
}else{if(i<90){return j.minute
}else{if(m<45){return j.minutes(m)
}else{if(m<90){return j.hour
}else{if(h<24){return j.hours(h)
}else{if(h<48){return j.day
}else{if(d<30){return j.days(d)
}else{if(d<60){return j.month
}else{if(d<365){return j.months(d)
}else{if(y<2){return j.year
}else{return j.years(y)
}}}}}}}}}}}};
var R={create:function(i,j,k){var f="";
if(k){var g=new Date();
g.setTime(g.getTime()+(k*24*60*60*1000));
f="; expires="+g.toGMTString()
}document.cookie=i+"="+j+f+"; path=/"
},read:function(g){var k=g+"=";
var f=document.cookie.split(";");
for(var j=0;
j<f.length;
j+=1){var l=f[j];
while(l.charAt(0)===" "){l=l.substring(1,l.length)
}if(l.indexOf(k)===0){return l.substring(k.length,l.length)
}}return null
},erase:function(f){this.createCookie(f,"",-1)
}};
var W={xhr:null,init:function(){var f=this;
L.getScript("http://"+B+"/xdm/easyXDM.min.js",function(g,i){f.xhr=new easyXDM.Rpc({remote:"http://"+B+"/xdm/index.html"},{remote:{request:{}},serializer:{stringify:function(j){var k={id:j.id,jsonrpc:j.jsonrpc,method:j.method,params:j.params[0]};
return f.stringify(k)
},parse:function(j){return L.parseJSON(j)
}}})
})
},send:function(i,j,k,g,f){this.xhr.request({url:i,method:"POST",data:j},function(l){k(l);
f()
},function(l){g(l);
f()
})
},stringify:function(k){var j=typeof (k);
if(j!="object"||k===null){if(j=="string"){k='"'+k+'"'
}return String(k)
}else{var l,g,i=[],f=(k&&k.constructor==Array);
for(l in k){g=k[l];
j=typeof (g);
if(j=="string"){g='"'+g+'"'
}else{if(j=="object"&&g!==null){g=this.stringify(g)
}}i.push((f?"":'"'+l+'":')+String(g))
}return(f?"[":"{")+String(i)+(f?"]":"}")
}}};
var Q={init:function(){var f=L("#mc-dialog"),g=this;
L("#dialogClose").click(function(){f.hide()
});
L(".mc-popup-top").mousedown(function(k){var i=L(this).parent(),j=g.getMouseOffset(g,this,k);
L(document).mousemove(function(l){if(i){i.css("top",l.pageY-j.y+"px");
i.css("left",l.pageX-j.x+"px")
}});
L(this).mouseup(function(){i=null
});
return false
})
},getMouseOffset:function(j,i,g){var f=j.getPosition(i);
return{x:g.pageX-f.x,y:g.pageY-f.y}
},getPosition:function(i){var g=0;
var f=0;
while(i.offsetParent){g+=i.offsetLeft;
f+=i.offsetTop;
i=i.offsetParent
}g+=i.offsetLeft;
f+=i.offsetTop;
return{x:g,y:f}
},show:function(n,p,f,o){var k=L("#mc-dialog"),j=o>0||k.height(),i=f>0||k.width();
L("#mc-dialog .mc-popup-top h4").text(n);
L("#mc-dialog-main").html(p);
if(!k.is(":visible")){var l=(L(window).height()/2)-(j/2);
var g=(L(window).width()/2)-(i/2);
k.attr("style","display:block;top:"+l+"px;left:"+g+"px;");
if(o){k.css("height",j)
}if(f>0){k.css("width",i)
}else{if(f<0){k.css("width","auto")
}}}},hide:function(){var f=L("#mc-dialog");
if(f.is(":visible")){f.hide()
}}};
var K={addToolbar:function(f,k){var i=this,j=L('<div class="mc-moderate-box" style="display:none"></div>'),g=L("<a/>",{href:"#"});
g.text(I.moderate);
j.html(g);
L(g).click(function(){var l=L(this).parents("li")[0],o=L(l).children("div"),n=L(o).attr("class");
Q.show(I.moderation,i.toolbar(k,n),-1);
return false
});
f.append(j)
},toolbar:function(i,f){var g=L("<p/>");
g.append(this.userPanel(i,i.author));
g.append(this.commentPanel(i,f));
return g
},userPanel:function(o,l){var p=this,r=L("<table/>"),n=L("<tbody/>"),q=L("<tr/>"),j=L("<td/>"),i=L("<td/>"),k=L("<tr/>"),g=L("<td/>"),f=L("<td/>");
r.append(n);
r.css("background-color","#EEEEEE");
r.css("padding","2px");
n.append(q);
q.append(j);
q.append(i);
n.append(k);
k.append(g);
k.append(f);
L.getJSON("http://"+B+"/comment/"+o.id+"/isBanned?callback=?",function(v){if(v.name){var t,s=v.name;
j.text();
if(v.email){s+=" <"+v.email+">"
}j.text(s);
if(v.isUserBanned){t=p.moderateLink(o.id,"unbanUser",I.unbanUser)
}else{t=p.moderateLink(o.id,"banUser",I.banUser)
}i.html(t);
L(t).click(function(){L.getJSON(L(this).attr("href"),function(x){var w=K.toolbar(x,x.status);
Q.show(I.moderation,w,-1);
P.updateCommentStatus(x)
});
return false
})
}else{j.text(I.anonym)
}var u;
g.text(v.ip);
if(v.isIpBanned){u=p.moderateLink(o.id,"unbanIp",I.unbanIp)
}else{u=p.moderateLink(o.id,"banIp",I.banIp)
}f.html(u);
L(u).click(function(){L.getJSON(L(this).attr("href"),function(x){var w=K.toolbar(x,x.status);
Q.show(I.moderation,w,-1);
P.updateCommentStatus(x)
});
return false
})
});
return r
},commentPanel:function(n,f){var l=this,k=[],i=L("<table/>"),g=L("<tbody/>"),j=L("<tr/>");
i.append(g);
i.css("background-color","#EEEEEE");
i.css("padding","2px");
i.css("margin-top","4px");
g.append(j);
if(f==="APPROVED"){k.push("reject")
}else{if(f==="PENDING"){k.push("approve");
k.push("reject")
}else{k.push("recovery")
}}if(f=="SPAM"){k.push("delete")
}else{if(f!="DELETED"){k.push("spam");
k.push("delete")
}}L.each(k,function(q,p){var r=L("<td/>"),o=l.moderateLink(n.id,p,I[p]);
L(o).click(function(){L.getJSON(L(this).attr("href"),function(t){var s=K.toolbar(t,t.status);
Q.show(I.moderation,s,-1);
P.updateCommentStatus(t)
});
return false
});
r.html(o);
j.append(r)
});
return i
},moderateLink:function(i,f,g){return L('<a href="http://'+B+"/comment/"+i+"/"+f+'?callback=?">'+g+"</a>")
}}
})
};
reinit=function(){F("#mc-content").remove();
F(document).unbind(".cackle");
A()
};
if(window.jQuery===undefined||(!(D)&&window.jQuery.fn.jquery!=="1.7")){var G=document.createElement("script");
G.setAttribute("type","text/javascript");
G.setAttribute("src","http://code.jquery.com/jquery-1.7.min.js");
G.onload=E;
G.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){E()
}};
(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(G)
}else{F=window.jQuery;
A()
}return{main:A,reinit:reinit}
})();