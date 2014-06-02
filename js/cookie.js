d=document,xp=';expires=1 jan 0 00:00:00',but=$('<button>'),i=0
/*secrets told by Luis Fernando Avila Suarez 18:00 26/02/2014
cookies have been used for years because it stores data/information even if browser has been closed up/shut down or it crashes
so unique known way to get rid of them is deleting/clearing them by using browser's tools like tools>delete>history or cookies or stuff like that
most common/regular way is holding/pressing down these keys ctrl+shift+h and there you can choose what's watcha wanna delete (what you want to delete)
set: 		add/(renew/refresh) new cookie | Google Chrome does not reset document.cookie simply appends the given newborn cookie	|
get: 		sort the main string to an array(also known as JSON format/encode),and getting rid off spaces 		|	using split('; ')	|
				loop through it looking into each array position the name/value
delete:	gets wanted/specific cookie and proceeds to expires it using some old fashion date like example given above.*/

function rA(th,A){th.removeAttribute(A)}
function fe(e){// for each
	$(e).each(function(){
		dlk(this.cookieCached)
		stk(this.innerText)
		rA(this,'contentEditable'),rmv(this)})}
function nw(tx){BT=but.clone(),$(BT).text(tx),$(BT)[0].draggable=true,$(cksB).append(BT)}
function rmv(th){th=='.taget'?0:rA(th,'class')}
function cs(){return ck().split(';')}
function ck(){return d.cookie}
function stk(n,v){//name,value	__set cookie
	if(v){
		d.cookie=n+'='+v+';'
		btn=bt.clone().text(n+'='+v+';')
		$(cks).append(btn)}
	else{
		d.cookie=n}
	return ds=ck()}
function gtk(n,di){i=0//name,detailed information(use true)	__get cookie
	ds=cs(),rv=false
	ne=n+'=',oths='\n\nthis is cookies set:\n'+ds
	while(i<ds.length){
		ck=ds[i++].trim()
		if(ck.indexOf(ne)>=0)rv=ck.substring(ne.length,ck.length);return di?n+'='+rv+oths:rv}
	return 'your keyword "'+n+'" was NOT found!'+oths}
function dlk(nth,all){//	__delete cookie
	ds=cs(),i=0
	if(all){
		if(ck()!='')while(i<ds.length)d.cookie+=';expires=1 jan 0 00:00:00',i++}
	else{
		d.cookie=nth+xp}
	return ck()==''?'0 cookies':(ds.length-1)>1?'there are '+(ds.length-1)+' cookies:\n\n'+cs():'just left this cookie\n\n'+ck()}

if((ds=cs())!='')while(i<ds.length)nw(ds[i++])
bt=$('button')

$(d).keydown(function(e){(k=e.keyCode)==75&&e.ctrlKey?(e.preventDefault(),$(cks).toggleClass('hide'),$('.left-panel').toggleClass('expand')):k==13&&d.activeElement.tagName=='BUTTON'?fe('.ce'):0})
$(cks).on({dragover:function(){return false}})
$('#cksB *').on({
	click:function(e){e.ctrlKey?(nw((tx=cs()[$(this).index()])),$(BT=cksB.lastChild).text('name=value'),BT.contentEditable=true,$(BT).addClass('ce'),BT.focus()):e.shiftKey?(this.contentEditable=this.isContentEditable?false:true,this.spellcheck?this.spellcheck=false:rA(this,'spellcheck'),$(this).toggleClass('ce'),this.cookieCached=this.innerText,this.focus()):0},
	dragend:function(){$(this).insertBefore('.target'),rmv($('.target')[0])},
	dragenter:function(){$(this).addClass('target')},
	dragleave:function(){rmv(this)},
	keydown:function(e){(k=e.keyCode)==46?($(this).index()!=0?this.previousSibling.focus():0,dlk($(this).text()),this.remove()):0}})
