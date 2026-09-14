const $=id=>document.getElementById(id);let current=0;
const items=[['Follow the artist','Keep August Kind in your SoundCloud feed.','Simulate follow'],['Like the track','Show We Are Back some love on SoundCloud.','Simulate like'],['Repost the track','Help the music find its next listener.','Simulate repost']];
function render(){
 const item=items[current];
 $('count').textContent=`0${current+1} von 0${items.length}`;
 $('steps').innerHTML=`<section class="step active" aria-current="step"><div class="step-title"><span class="step-name">${item[0]}</span></div><button class="action">${item[2]}<span aria-hidden="true">↗</span></button></section>`;
 document.querySelector('.action').onclick=()=>{current++;if(current===items.length){$('flow').hidden=true;$('success').hidden=false;document.querySelector('.download-file').focus({preventScroll:true});}else{render();document.querySelector('.action').focus({preventScroll:true});}};
}
$('start').onclick=()=>{$('intro').hidden=true;$('flow').hidden=false;render();$('back').focus({preventScroll:true})};
function reset(){current=0;$('flow').hidden=true;$('success').hidden=true;$('intro').hidden=false;$('download-status').textContent='';$('start').focus({preventScroll:true})}$('back').onclick=reset;$('restart').onclick=reset;
const audio=$('audio');$('play').onclick=async()=>{if(audio.paused){try{await audio.play()}catch{$('preview-label')?.replaceChildren('Preview unavailable')}}else audio.pause()};function playback(){const playing=!audio.paused;$('play-icon').textContent=playing?'Ⅱ':'▶';$('play').setAttribute('aria-label',playing?'Pause demo preview':'Play demo preview');$('play').setAttribute('aria-pressed',String(playing))}audio.onplay=playback;audio.onpause=playback;audio.onended=playback;
document.querySelector('.download-file').onclick=()=>{$('download-status').textContent='Download started.'};
