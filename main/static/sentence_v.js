/******************* 
 * Word_Based Test *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Sentence based task';  // from the Builder filename that created this script
let expInfo = {
    'UserName': 'User01',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(sentence_series_part3RoutineBegin());
flowScheduler.add(sentence_series_part3RoutineEachFrame());
flowScheduler.add(sentence_series_part3RoutineEnd());
flowScheduler.add(final_step);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instrClock;
var welcome;
var key_resp_3;
var sentence_series_part1Clock;
var text_90;
var text_91;
var text_92;
var text_93;
var text_94;
var text_95;
var text_96;
var text_98;
var text_99;
var text_100;
var text_101;
var text_102;
var text_103;
var text_104;
var text_105;
var text_106;
var text_107;
var text_108;
var text_109;
var text_110;
var text_111;
var text_113;
var ext_114;
var sentence_series_part2Clock;
var text_114;
var text_115;
var text_116;
var text_117;
var text_118;
var text_119;
var text_120;
var text_121;
var text_122;
var text_123;
var text_124;
var text_125;
var text_126;
var text_127;
var text_128;
var text_129;
var text_130;
var text_131;
var text_132;
var text_133;
var text_134;
var text_135;
var text_136;
var text_137;
var text_138;
var placeholder;
var sentence_series_part3Clock;
var text_139;
var text_140;
var text_141;
var text_142;
var text_143;
var text_144;
var text_145;
var text_146;
var text_147;
var text_148;
var text_149;
var text_150;
var text_151;
var text_152;
var text_153;
var text_154;
var text_155;
var text_97;
var text_156;
var text_157;
var text_158;
var text_159;
var text_160;
var text_161;
var text_162;
var text_163;
var sentence_series_part4Clock;
var text_164;
var text_165;
var text_166;
var text_167;
var text_168;
var text_169;
var text_170;
var text_171;
var text_172;
var text_173;
var text_174;
var text_175;
var text_176;
var text_177;
var text_178;
var text_179;
var text_180;
var text_181;
var text_182;
var text_183;
var text_184;
var text_185;
var text_186;
var text_187;
var text_188;
var sentence_series_part5Clock;
var text_189;
var text_190;
var text_191;
var text_192;
var text_193;
var text_194;
var text_195;
var text_196;
var text_197;
var text_198;
var text_199;
var text_200;
var text_201;
var text_202;
var text_203;
var text_204;
var text_205;
var text_206;
var text_207;
var text_208;
var text_209;
var text_210;
var text_211;
var text_212;
var key_resp_15;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: 'Please read the following sentences \n\n\n Press "Space" to start. ',   font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sentence_series_part1"
  sentence_series_part1Clock = new util.Clock();

  
  text_90 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_90',
    text: 'I',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_91 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_91',
    text: 'drink',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_92 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_92',
    text: 'coffee',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_93 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_93',
    text: 'with',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  text_94 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_94',
    text: 'milk',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  text_95 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_95',
    text: 'and',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  text_96 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_96',
    text: 'sugar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  text_98 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_98',
    text: 'Ted',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.095,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_99 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_99',
    text: 'smiled',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.095,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  text_100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_100',
    text: 'and',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.095,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  text_101 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_101',
    text: 'bit',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.095,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  text_102 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_102',
    text: 'his',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.095,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  text_103 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_103',
    text: 'bottom',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.095,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  text_104 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_104',
    text: 'lip.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.095,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -14.0 
  });
  
  text_105 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_105',
    text: 'The',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  text_106 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_106',
    text: 'prison',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -16.0 
  });
  
  text_107 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_107',
    text: 'guard',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  text_108 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_108',
    text: 'walked',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -18.0 
  });
  
  text_109 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_109',
    text: 'along',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -19.0 
  });
  
  text_110 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_110',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -20.0 
  });
  
  text_111 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_111',
    text: 'row.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.09,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -21.0 
  });
  
  text_113 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_113',
    text: 'I',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.085,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -22.0 
  });
  
  ext_114 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ext_114',
    text: 'drink',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.085,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -23.0 
  });
  
  // Initialize components for Routine "sentence_series_part2"
  sentence_series_part2Clock = new util.Clock();
  text_114 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_114',
    text: 'coffee',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.085,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_115 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_115',
    text: 'with',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.085,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_116 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_116',
    text: 'milk',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.085,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_117 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_117',
    text: 'and',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.085,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_118 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_118',
    text: 'sugar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.085,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  text_119 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_119',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  text_120 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_120',
    text: 'horse',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  text_121 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_121',
    text: 'has',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  text_122 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_122',
    text: 'thrown',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_123 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_123',
    text: 'a',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  text_124 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_124',
    text: 'shoe.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  text_125 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_125',
    text: 'Ted',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  text_126 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_126',
    text: 'smiled',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  text_127 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_127',
    text: 'and',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  text_128 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_128',
    text: 'bit',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -14.0 
  });
  
  text_129 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_129',
    text: 'his',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  text_130 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_130',
    text: 'bottom',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -16.0 
  });
  
  text_131 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_131',
    text: 'lip.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  text_132 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_132',
    text: 'The',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -18.0 
  });
  
  text_133 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_133',
    text: 'prison',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -19.0 
  });
  
  text_134 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_134',
    text: 'guard',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -20.0 
  });
  
  text_135 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_135',
    text: 'walked',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -21.0 
  });
  
  text_136 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_136',
    text: 'along',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -22.0 
  });
  
  text_137 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_137',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -23.0 
  });
  
  text_138 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_138',
    text: 'row.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -24.0 
  });
  
  placeholder = new visual.TextStim({
    win: psychoJS.window,
    name: 'placeholder',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -25.0 
  });
  
  // Initialize components for Routine "sentence_series_part3"
  sentence_series_part3Clock = new util.Clock();
  text_139 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_139',
    text: 'Ted',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_140 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_140',
    text: 'smiled',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_141 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_141',
    text: 'and',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_142 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_142',
    text: 'bit',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_143 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_143',
    text: 'his',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  text_144 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_144',
    text: 'bottom',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  text_145 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_145',
    text: 'rainbow.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.065,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  text_146 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_146',
    text: 'Steve',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  text_147 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_147',
    text: 'sat',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_148 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_148',
    text: 'down',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  text_149 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_149',
    text: 'to',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  text_150 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_150',
    text: 'eat',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  text_151 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_151',
    text: 'his',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  text_152 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_152',
    text: 'lunch.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  text_153 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_153',
    text: 'I',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.055,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -14.0 
  });
  
  text_154 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_154',
    text: 'drink',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.055,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  text_155 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_155',
    text: 'coffee',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.055,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -16.0 
  });
  
  text_97 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_97',
    text: 'with',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.055,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  text_156 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_156',
    text: 'milk',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.055,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -18.0 
  });
  
  text_157 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_157',
    text: 'and',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.055,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -19.0 
  });
  
  text_158 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_158',
    text: 'socks.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.055,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -20.0 
  });
  
  text_159 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_159',
    text: 'He',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -21.0 
  });
  
  text_160 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_160',
    text: 'put',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -22.0 
  });
  
  text_161 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_161',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -23.0 
  });
  
  text_162 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_162',
    text: 'fork',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -24.0 
  });
  
  text_163 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_163',
    text: 'on',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -25.0 
  });
  
  // Initialize components for Routine "sentence_series_part4"
  sentence_series_part4Clock = new util.Clock();
  text_164 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_164',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_165 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_165',
    text: 'table.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_166 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_166',
    text: 'The',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_167 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_167',
    text: 'prison',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_168 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_168',
    text: 'guard',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  text_169 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_169',
    text: 'walked',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  text_170 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_170',
    text: 'along',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  text_171 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_171',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  text_172 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_172',
    text: 'moon.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_173 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_173',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  text_174 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_174',
    text: 'horse',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  text_175 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_175',
    text: 'has',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  text_176 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_176',
    text: 'thrown',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  text_177 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_177',
    text: 'a',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  text_178 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_178',
    text: 'shoe.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -14.0 
  });
  
  text_179 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_179',
    text: 'Steve',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  text_180 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_180',
    text: 'sat',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -16.0 
  });
  
  text_181 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_181',
    text: 'down',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  text_182 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_182',
    text: 'to',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -18.0 
  });
  
  text_183 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_183',
    text: 'eat',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -19.0 
  });
  
  text_184 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_184',
    text: 'his',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -20.0 
  });
  
  text_185 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_185',
    text: 'lunch.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -21.0 
  });
  
  text_186 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_186',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -22.0 
  });
  
  text_187 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_187',
    text: 'horse',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -23.0 
  });
  
  text_188 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_188',
    text: 'has',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -24.0 
  });
  
  // Initialize components for Routine "sentence_series_part5"
  sentence_series_part5Clock = new util.Clock();
  text_189 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_189',
    text: 'thrown',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text_190 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_190',
    text: 'a',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  text_191 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_191',
    text: 'plane.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_192 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_192',
    text: 'He',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  text_193 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_193',
    text: 'put',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  text_194 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_194',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  text_195 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_195',
    text: 'fork',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  text_196 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_196',
    text: 'on',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  text_197 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_197',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  text_198 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_198',
    text: 'table.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  text_199 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_199',
    text: 'Steve',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  text_200 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_200',
    text: 'sat',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  text_201 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_201',
    text: 'down',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  text_202 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_202',
    text: 'to',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  text_203 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_203',
    text: 'eat',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -14.0 
  });
  
  text_204 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_204',
    text: 'his',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -15.0 
  });
  
  text_205 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_205',
    text: 'car.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -16.0 
  });
  
  text_206 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_206',
    text: 'He',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -17.0 
  });
  
  text_207 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_207',
    text: 'put',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -18.0 
  });
  
  text_208 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_208',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -19.0 
  });
  
  text_209 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_209',
    text: 'fork',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -20.0 
  });
  
  text_210 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_210',
    text: 'on',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -21.0 
  });
  
  text_211 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_211',
    text: 'the',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -22.0 
  });
  
  text_212 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_212',
    text: 'door.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -23.0 
  });
  
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_3_allKeys;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(welcome);
    instrComponents.push(key_resp_3);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sentence_series_part1Components;
function sentence_series_part1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sentence_series_part1' ---
    t = 0;
    sentence_series_part1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(19.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    sentence_series_part1Components = [];
    sentence_series_part1Components.push(text_90);
    sentence_series_part1Components.push(text_91);
    sentence_series_part1Components.push(text_92);
    sentence_series_part1Components.push(text_93);
    sentence_series_part1Components.push(text_94);
    sentence_series_part1Components.push(text_95);
    sentence_series_part1Components.push(text_96);
    sentence_series_part1Components.push(text_98);
    sentence_series_part1Components.push(text_99);
    sentence_series_part1Components.push(text_100);
    sentence_series_part1Components.push(text_101);
    sentence_series_part1Components.push(text_102);
    sentence_series_part1Components.push(text_103);
    sentence_series_part1Components.push(text_104);
    sentence_series_part1Components.push(text_105);
    sentence_series_part1Components.push(text_106);
    sentence_series_part1Components.push(text_107);
    sentence_series_part1Components.push(text_108);
    sentence_series_part1Components.push(text_109);
    sentence_series_part1Components.push(text_110);
    sentence_series_part1Components.push(text_111);
    sentence_series_part1Components.push(text_113);
    sentence_series_part1Components.push(ext_114);
    
    for (const thisComponent of sentence_series_part1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function sentence_series_part1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sentence_series_part1' ---
    // get current time
    t = sentence_series_part1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    
    // *text_90* updates
    if (t >= 5 && text_90.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_90.tStart = t;  // (not accounting for frame time here)
      text_90.frameNStart = frameN;  // exact frame index
      
      text_90.setAutoDraw(true);
    }

    frameRemains = 5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_90.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_90.setAutoDraw(false);
    }
    
    // *text_91* updates
    if (t >= 5.5 && text_91.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_91.tStart = t;  // (not accounting for frame time here)
      text_91.frameNStart = frameN;  // exact frame index
      
      text_91.setAutoDraw(true);
    }

    frameRemains = 5.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_91.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_91.setAutoDraw(false);
    }
    
    // *text_92* updates
    if (t >= 6 && text_92.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_92.tStart = t;  // (not accounting for frame time here)
      text_92.frameNStart = frameN;  // exact frame index
      
      text_92.setAutoDraw(true);
    }

    frameRemains = 6 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_92.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_92.setAutoDraw(false);
    }
    
    // *text_93* updates
    if (t >= 6.5 && text_93.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_93.tStart = t;  // (not accounting for frame time here)
      text_93.frameNStart = frameN;  // exact frame index
      
      text_93.setAutoDraw(true);
    }

    frameRemains = 6.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_93.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_93.setAutoDraw(false);
    }
    
    // *text_94* updates
    if (t >= 7 && text_94.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_94.tStart = t;  // (not accounting for frame time here)
      text_94.frameNStart = frameN;  // exact frame index
      
      text_94.setAutoDraw(true);
    }

    frameRemains = 7 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_94.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_94.setAutoDraw(false);
    }
    
    // *text_95* updates
    if (t >= 7.5 && text_95.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_95.tStart = t;  // (not accounting for frame time here)
      text_95.frameNStart = frameN;  // exact frame index
      
      text_95.setAutoDraw(true);
    }

    frameRemains = 7.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_95.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_95.setAutoDraw(false);
    }
    
    // *text_96* updates
    if (t >= 8 && text_96.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_96.tStart = t;  // (not accounting for frame time here)
      text_96.frameNStart = frameN;  // exact frame index
      
      text_96.setAutoDraw(true);
    }

    frameRemains = 8 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_96.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_96.setAutoDraw(false);
    }
    
    // *text_98* updates
    if (t >= 9.5 && text_98.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_98.tStart = t;  // (not accounting for frame time here)
      text_98.frameNStart = frameN;  // exact frame index
      
      text_98.setAutoDraw(true);
    }

    frameRemains = 9.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_98.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_98.setAutoDraw(false);
    }
    
    // *text_99* updates
    if (t >= 10 && text_99.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_99.tStart = t;  // (not accounting for frame time here)
      text_99.frameNStart = frameN;  // exact frame index
      
      text_99.setAutoDraw(true);
    }

    frameRemains = 10 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_99.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_99.setAutoDraw(false);
    }
    
    // *text_100* updates
    if (t >= 10.5 && text_100.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_100.tStart = t;  // (not accounting for frame time here)
      text_100.frameNStart = frameN;  // exact frame index
      
      text_100.setAutoDraw(true);
    }

    frameRemains = 10.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_100.setAutoDraw(false);
    }
    
    // *text_101* updates
    if (t >= 11 && text_101.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_101.tStart = t;  // (not accounting for frame time here)
      text_101.frameNStart = frameN;  // exact frame index
      
      text_101.setAutoDraw(true);
    }

    frameRemains = 11 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_101.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_101.setAutoDraw(false);
    }
    
    // *text_102* updates
    if (t >= 11.5 && text_102.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_102.tStart = t;  // (not accounting for frame time here)
      text_102.frameNStart = frameN;  // exact frame index
      
      text_102.setAutoDraw(true);
    }

    frameRemains = 11.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_102.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_102.setAutoDraw(false);
    }
    
    // *text_103* updates
    if (t >= 12 && text_103.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_103.tStart = t;  // (not accounting for frame time here)
      text_103.frameNStart = frameN;  // exact frame index
      
      text_103.setAutoDraw(true);
    }

    frameRemains = 12 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_103.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_103.setAutoDraw(false);
    }
    
    // *text_104* updates
    if (t >= 12.5 && text_104.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_104.tStart = t;  // (not accounting for frame time here)
      text_104.frameNStart = frameN;  // exact frame index
      
      text_104.setAutoDraw(true);
    }

    frameRemains = 12.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_104.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_104.setAutoDraw(false);
    }
    
    // *text_105* updates
    if (t >= 14 && text_105.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_105.tStart = t;  // (not accounting for frame time here)
      text_105.frameNStart = frameN;  // exact frame index
      
      text_105.setAutoDraw(true);
    }

    frameRemains = 14 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_105.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_105.setAutoDraw(false);
    }
    
    // *text_106* updates
    if (t >= 14.5 && text_106.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_106.tStart = t;  // (not accounting for frame time here)
      text_106.frameNStart = frameN;  // exact frame index
      
      text_106.setAutoDraw(true);
    }

    frameRemains = 14.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_106.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_106.setAutoDraw(false);
    }
    
    // *text_107* updates
    if (t >= 15 && text_107.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_107.tStart = t;  // (not accounting for frame time here)
      text_107.frameNStart = frameN;  // exact frame index
      
      text_107.setAutoDraw(true);
    }

    frameRemains = 15 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_107.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_107.setAutoDraw(false);
    }
    
    // *text_108* updates
    if (t >= 15.5 && text_108.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_108.tStart = t;  // (not accounting for frame time here)
      text_108.frameNStart = frameN;  // exact frame index
      
      text_108.setAutoDraw(true);
    }

    frameRemains = 15.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_108.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_108.setAutoDraw(false);
    }
    
    // *text_109* updates
    if (t >= 16 && text_109.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_109.tStart = t;  // (not accounting for frame time here)
      text_109.frameNStart = frameN;  // exact frame index
      
      text_109.setAutoDraw(true);
    }

    frameRemains = 16 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_109.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_109.setAutoDraw(false);
    }
    
    // *text_110* updates
    if (t >= 16.5 && text_110.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_110.tStart = t;  // (not accounting for frame time here)
      text_110.frameNStart = frameN;  // exact frame index
      
      text_110.setAutoDraw(true);
    }

    frameRemains = 16.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_110.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_110.setAutoDraw(false);
    }
    
    // *text_111* updates
    if (t >= 17 && text_111.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_111.tStart = t;  // (not accounting for frame time here)
      text_111.frameNStart = frameN;  // exact frame index
      
      text_111.setAutoDraw(true);
    }

    frameRemains = 17 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_111.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_111.setAutoDraw(false);
    }
    
    // *text_113* updates
    if (t >= 18.5 && text_113.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_113.tStart = t;  // (not accounting for frame time here)
      text_113.frameNStart = frameN;  // exact frame index
      
      text_113.setAutoDraw(true);
    }

    frameRemains = 18.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_113.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_113.setAutoDraw(false);
    }
    
    // *ext_114* updates
    if (t >= 19 && ext_114.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ext_114.tStart = t;  // (not accounting for frame time here)
      ext_114.frameNStart = frameN;  // exact frame index
      
      ext_114.setAutoDraw(true);
    }

    frameRemains = 19 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ext_114.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ext_114.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sentence_series_part1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sentence_series_part1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sentence_series_part1' ---
    for (const thisComponent of sentence_series_part1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sentence_series_part2Components;
function sentence_series_part2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sentence_series_part2' ---
    t = 0;
    sentence_series_part2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(16.800000);
    // update component parameters for each repeat
    // keep track of which components have finished
    sentence_series_part2Components = [];
    sentence_series_part2Components.push(text_114);
    sentence_series_part2Components.push(text_115);
    sentence_series_part2Components.push(text_116);
    sentence_series_part2Components.push(text_117);
    sentence_series_part2Components.push(text_118);
    sentence_series_part2Components.push(text_119);
    sentence_series_part2Components.push(text_120);
    sentence_series_part2Components.push(text_121);
    sentence_series_part2Components.push(text_122);
    sentence_series_part2Components.push(text_123);
    sentence_series_part2Components.push(text_124);
    sentence_series_part2Components.push(text_125);
    sentence_series_part2Components.push(text_126);
    sentence_series_part2Components.push(text_127);
    sentence_series_part2Components.push(text_128);
    sentence_series_part2Components.push(text_129);
    sentence_series_part2Components.push(text_130);
    sentence_series_part2Components.push(text_131);
    sentence_series_part2Components.push(text_132);
    sentence_series_part2Components.push(text_133);
    sentence_series_part2Components.push(text_134);
    sentence_series_part2Components.push(text_135);
    sentence_series_part2Components.push(text_136);
    sentence_series_part2Components.push(text_137);
    sentence_series_part2Components.push(text_138);
    sentence_series_part2Components.push(placeholder);
    
    for (const thisComponent of sentence_series_part2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sentence_series_part2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sentence_series_part2' ---
    // get current time
    t = sentence_series_part2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_114* updates
    if (t >= 0 && text_114.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_114.tStart = t;  // (not accounting for frame time here)
      text_114.frameNStart = frameN;  // exact frame index
      
      text_114.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_114.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_114.setAutoDraw(false);
    }
    
    // *text_115* updates
    if (t >= 0.5 && text_115.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_115.tStart = t;  // (not accounting for frame time here)
      text_115.frameNStart = frameN;  // exact frame index
      
      text_115.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_115.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_115.setAutoDraw(false);
    }
    
    // *text_116* updates
    if (t >= 1 && text_116.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_116.tStart = t;  // (not accounting for frame time here)
      text_116.frameNStart = frameN;  // exact frame index
      
      text_116.setAutoDraw(true);
    }

    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_116.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_116.setAutoDraw(false);
    }
    
    // *text_117* updates
    if (t >= 1.5 && text_117.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_117.tStart = t;  // (not accounting for frame time here)
      text_117.frameNStart = frameN;  // exact frame index
      
      text_117.setAutoDraw(true);
    }

    frameRemains = 1.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_117.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_117.setAutoDraw(false);
    }
    
    // *text_118* updates
    if (t >= 2 && text_118.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_118.tStart = t;  // (not accounting for frame time here)
      text_118.frameNStart = frameN;  // exact frame index
      
      text_118.setAutoDraw(true);
    }

    frameRemains = 2 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_118.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_118.setAutoDraw(false);
    }
    
    // *text_119* updates
    if (t >= 3.5 && text_119.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_119.tStart = t;  // (not accounting for frame time here)
      text_119.frameNStart = frameN;  // exact frame index
      
      text_119.setAutoDraw(true);
    }

    frameRemains = 3.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_119.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_119.setAutoDraw(false);
    }
    
    // *text_120* updates
    if (t >= 4 && text_120.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_120.tStart = t;  // (not accounting for frame time here)
      text_120.frameNStart = frameN;  // exact frame index
      
      text_120.setAutoDraw(true);
    }

    frameRemains = 4 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_120.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_120.setAutoDraw(false);
    }
    
    // *text_121* updates
    if (t >= 4.5 && text_121.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_121.tStart = t;  // (not accounting for frame time here)
      text_121.frameNStart = frameN;  // exact frame index
      
      text_121.setAutoDraw(true);
    }

    frameRemains = 4.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_121.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_121.setAutoDraw(false);
    }
    
    // *text_122* updates
    if (t >= 5 && text_122.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_122.tStart = t;  // (not accounting for frame time here)
      text_122.frameNStart = frameN;  // exact frame index
      
      text_122.setAutoDraw(true);
    }

    frameRemains = 5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_122.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_122.setAutoDraw(false);
    }
    
    // *text_123* updates
    if (t >= 5.5 && text_123.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_123.tStart = t;  // (not accounting for frame time here)
      text_123.frameNStart = frameN;  // exact frame index
      
      text_123.setAutoDraw(true);
    }

    frameRemains = 5.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_123.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_123.setAutoDraw(false);
    }
    
    // *text_124* updates
    if (t >= 6 && text_124.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_124.tStart = t;  // (not accounting for frame time here)
      text_124.frameNStart = frameN;  // exact frame index
      
      text_124.setAutoDraw(true);
    }

    frameRemains = 6 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_124.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_124.setAutoDraw(false);
    }
    
    // *text_125* updates
    if (t >= 7.5 && text_125.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_125.tStart = t;  // (not accounting for frame time here)
      text_125.frameNStart = frameN;  // exact frame index
      
      text_125.setAutoDraw(true);
    }

    frameRemains = 7.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_125.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_125.setAutoDraw(false);
    }
    
    // *text_126* updates
    if (t >= 8 && text_126.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_126.tStart = t;  // (not accounting for frame time here)
      text_126.frameNStart = frameN;  // exact frame index
      
      text_126.setAutoDraw(true);
    }

    frameRemains = 8 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_126.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_126.setAutoDraw(false);
    }
    
    // *text_127* updates
    if (t >= 8.5 && text_127.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_127.tStart = t;  // (not accounting for frame time here)
      text_127.frameNStart = frameN;  // exact frame index
      
      text_127.setAutoDraw(true);
    }

    frameRemains = 8.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_127.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_127.setAutoDraw(false);
    }
    
    // *text_128* updates
    if (t >= 9 && text_128.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_128.tStart = t;  // (not accounting for frame time here)
      text_128.frameNStart = frameN;  // exact frame index
      
      text_128.setAutoDraw(true);
    }

    frameRemains = 9 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_128.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_128.setAutoDraw(false);
    }
    
    // *text_129* updates
    if (t >= 9.5 && text_129.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_129.tStart = t;  // (not accounting for frame time here)
      text_129.frameNStart = frameN;  // exact frame index
      
      text_129.setAutoDraw(true);
    }

    frameRemains = 9.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_129.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_129.setAutoDraw(false);
    }
    
    // *text_130* updates
    if (t >= 10 && text_130.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_130.tStart = t;  // (not accounting for frame time here)
      text_130.frameNStart = frameN;  // exact frame index
      
      text_130.setAutoDraw(true);
    }

    frameRemains = 10 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_130.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_130.setAutoDraw(false);
    }
    
    // *text_131* updates
    if (t >= 10.5 && text_131.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_131.tStart = t;  // (not accounting for frame time here)
      text_131.frameNStart = frameN;  // exact frame index
      
      text_131.setAutoDraw(true);
    }

    frameRemains = 10.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_131.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_131.setAutoDraw(false);
    }
    
    // *text_132* updates
    if (t >= 12 && text_132.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_132.tStart = t;  // (not accounting for frame time here)
      text_132.frameNStart = frameN;  // exact frame index
      
      text_132.setAutoDraw(true);
    }

    frameRemains = 12 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_132.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_132.setAutoDraw(false);
    }
    
    // *text_133* updates
    if (t >= 12.5 && text_133.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_133.tStart = t;  // (not accounting for frame time here)
      text_133.frameNStart = frameN;  // exact frame index
      
      text_133.setAutoDraw(true);
    }

    frameRemains = 12.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_133.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_133.setAutoDraw(false);
    }
    
    // *text_134* updates
    if (t >= 13 && text_134.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_134.tStart = t;  // (not accounting for frame time here)
      text_134.frameNStart = frameN;  // exact frame index
      
      text_134.setAutoDraw(true);
    }

    frameRemains = 13 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_134.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_134.setAutoDraw(false);
    }
    
    // *text_135* updates
    if (t >= 13.5 && text_135.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_135.tStart = t;  // (not accounting for frame time here)
      text_135.frameNStart = frameN;  // exact frame index
      
      text_135.setAutoDraw(true);
    }

    frameRemains = 13.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_135.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_135.setAutoDraw(false);
    }
    
    // *text_136* updates
    if (t >= 14 && text_136.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_136.tStart = t;  // (not accounting for frame time here)
      text_136.frameNStart = frameN;  // exact frame index
      
      text_136.setAutoDraw(true);
    }

    frameRemains = 14 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_136.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_136.setAutoDraw(false);
    }
    
    // *text_137* updates
    if (t >= 14.5 && text_137.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_137.tStart = t;  // (not accounting for frame time here)
      text_137.frameNStart = frameN;  // exact frame index
      
      text_137.setAutoDraw(true);
    }

    frameRemains = 14.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_137.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_137.setAutoDraw(false);
    }
    
    // *text_138* updates
    if (t >= 15 && text_138.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_138.tStart = t;  // (not accounting for frame time here)
      text_138.frameNStart = frameN;  // exact frame index
      
      text_138.setAutoDraw(true);
    }

    frameRemains = 15 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_138.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_138.setAutoDraw(false);
    }
    
    // *placeholder* updates
    if (t >= 15.8 && placeholder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      placeholder.tStart = t;  // (not accounting for frame time here)
      placeholder.frameNStart = frameN;  // exact frame index
      
      placeholder.setAutoDraw(true);
    }

    frameRemains = 15.8 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (placeholder.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      placeholder.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sentence_series_part2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sentence_series_part2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sentence_series_part2' ---
    for (const thisComponent of sentence_series_part2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sentence_series_part3Components;
function sentence_series_part3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sentence_series_part3' ---
    t = 0;
    sentence_series_part3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(16.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    sentence_series_part3Components = [];
    sentence_series_part3Components.push(text_139);
    sentence_series_part3Components.push(text_140);
    sentence_series_part3Components.push(text_141);
    sentence_series_part3Components.push(text_142);
    sentence_series_part3Components.push(text_143);
    sentence_series_part3Components.push(text_144);
    sentence_series_part3Components.push(text_145);
    sentence_series_part3Components.push(text_146);
    sentence_series_part3Components.push(text_147);
    sentence_series_part3Components.push(text_148);
    sentence_series_part3Components.push(text_149);
    sentence_series_part3Components.push(text_150);
    sentence_series_part3Components.push(text_151);
    sentence_series_part3Components.push(text_152);
    sentence_series_part3Components.push(text_153);
    sentence_series_part3Components.push(text_154);
    sentence_series_part3Components.push(text_155);
    sentence_series_part3Components.push(text_97);
    sentence_series_part3Components.push(text_156);
    sentence_series_part3Components.push(text_157);
    sentence_series_part3Components.push(text_158);
    sentence_series_part3Components.push(text_159);
    sentence_series_part3Components.push(text_160);
    sentence_series_part3Components.push(text_161);
    sentence_series_part3Components.push(text_162);
    sentence_series_part3Components.push(text_163);
    
    for (const thisComponent of sentence_series_part3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sentence_series_part3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sentence_series_part3' ---
    // get current time
    t = sentence_series_part3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_139* updates
    if (t >= 0 && text_139.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_139.tStart = t;  // (not accounting for frame time here)
      text_139.frameNStart = frameN;  // exact frame index
      
      text_139.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_139.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_139.setAutoDraw(false);
    }
    
    // *text_140* updates
    if (t >= 0.5 && text_140.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_140.tStart = t;  // (not accounting for frame time here)
      text_140.frameNStart = frameN;  // exact frame index
      
      text_140.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_140.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_140.setAutoDraw(false);
    }
    
    // *text_141* updates
    if (t >= 1 && text_141.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_141.tStart = t;  // (not accounting for frame time here)
      text_141.frameNStart = frameN;  // exact frame index
      
      text_141.setAutoDraw(true);
    }

    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_141.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_141.setAutoDraw(false);
    }
    
    // *text_142* updates
    if (t >= 1.5 && text_142.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_142.tStart = t;  // (not accounting for frame time here)
      text_142.frameNStart = frameN;  // exact frame index
      
      text_142.setAutoDraw(true);
    }

    frameRemains = 1.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_142.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_142.setAutoDraw(false);
    }
    
    // *text_143* updates
    if (t >= 2 && text_143.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_143.tStart = t;  // (not accounting for frame time here)
      text_143.frameNStart = frameN;  // exact frame index
      
      text_143.setAutoDraw(true);
    }

    frameRemains = 2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_143.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_143.setAutoDraw(false);
    }
    
    // *text_144* updates
    if (t >= 2.5 && text_144.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_144.tStart = t;  // (not accounting for frame time here)
      text_144.frameNStart = frameN;  // exact frame index
      
      text_144.setAutoDraw(true);
    }

    frameRemains = 2.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_144.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_144.setAutoDraw(false);
    }
    
    // *text_145* updates
    if (t >= 3 && text_145.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_145.tStart = t;  // (not accounting for frame time here)
      text_145.frameNStart = frameN;  // exact frame index
      
      text_145.setAutoDraw(true);
    }

    frameRemains = 3 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_145.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_145.setAutoDraw(false);
    }
    
    // *text_146* updates
    if (t >= 4.5 && text_146.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_146.tStart = t;  // (not accounting for frame time here)
      text_146.frameNStart = frameN;  // exact frame index
      
      text_146.setAutoDraw(true);
    }

    frameRemains = 4.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_146.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_146.setAutoDraw(false);
    }
    
    // *text_147* updates
    if (t >= 5 && text_147.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_147.tStart = t;  // (not accounting for frame time here)
      text_147.frameNStart = frameN;  // exact frame index
      
      text_147.setAutoDraw(true);
    }

    frameRemains = 5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_147.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_147.setAutoDraw(false);
    }
    
    // *text_148* updates
    if (t >= 5.5 && text_148.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_148.tStart = t;  // (not accounting for frame time here)
      text_148.frameNStart = frameN;  // exact frame index
      
      text_148.setAutoDraw(true);
    }

    frameRemains = 5.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_148.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_148.setAutoDraw(false);
    }
    
    // *text_149* updates
    if (t >= 6 && text_149.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_149.tStart = t;  // (not accounting for frame time here)
      text_149.frameNStart = frameN;  // exact frame index
      
      text_149.setAutoDraw(true);
    }

    frameRemains = 6 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_149.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_149.setAutoDraw(false);
    }
    
    // *text_150* updates
    if (t >= 6.5 && text_150.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_150.tStart = t;  // (not accounting for frame time here)
      text_150.frameNStart = frameN;  // exact frame index
      
      text_150.setAutoDraw(true);
    }

    frameRemains = 6.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_150.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_150.setAutoDraw(false);
    }
    
    // *text_151* updates
    if (t >= 7 && text_151.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_151.tStart = t;  // (not accounting for frame time here)
      text_151.frameNStart = frameN;  // exact frame index
      
      text_151.setAutoDraw(true);
    }

    frameRemains = 7 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_151.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_151.setAutoDraw(false);
    }
    
    // *text_152* updates
    if (t >= 7.5 && text_152.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_152.tStart = t;  // (not accounting for frame time here)
      text_152.frameNStart = frameN;  // exact frame index
      
      text_152.setAutoDraw(true);
    }

    frameRemains = 7.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_152.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_152.setAutoDraw(false);
    }
    
    // *text_153* updates
    if (t >= 9 && text_153.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_153.tStart = t;  // (not accounting for frame time here)
      text_153.frameNStart = frameN;  // exact frame index
      
      text_153.setAutoDraw(true);
    }

    frameRemains = 9 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_153.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_153.setAutoDraw(false);
    }
    
    // *text_154* updates
    if (t >= 9.5 && text_154.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_154.tStart = t;  // (not accounting for frame time here)
      text_154.frameNStart = frameN;  // exact frame index
      
      text_154.setAutoDraw(true);
    }

    frameRemains = 9.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_154.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_154.setAutoDraw(false);
    }
    
    // *text_155* updates
    if (t >= 10 && text_155.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_155.tStart = t;  // (not accounting for frame time here)
      text_155.frameNStart = frameN;  // exact frame index
      
      text_155.setAutoDraw(true);
    }

    frameRemains = 10 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_155.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_155.setAutoDraw(false);
    }
    
    // *text_97* updates
    if (t >= 10.5 && text_97.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_97.tStart = t;  // (not accounting for frame time here)
      text_97.frameNStart = frameN;  // exact frame index
      
      text_97.setAutoDraw(true);
    }

    frameRemains = 10.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_97.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_97.setAutoDraw(false);
    }
    
    // *text_156* updates
    if (t >= 11 && text_156.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_156.tStart = t;  // (not accounting for frame time here)
      text_156.frameNStart = frameN;  // exact frame index
      
      text_156.setAutoDraw(true);
    }

    frameRemains = 11 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_156.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_156.setAutoDraw(false);
    }
    
    // *text_157* updates
    if (t >= 11.5 && text_157.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_157.tStart = t;  // (not accounting for frame time here)
      text_157.frameNStart = frameN;  // exact frame index
      
      text_157.setAutoDraw(true);
    }

    frameRemains = 11.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_157.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_157.setAutoDraw(false);
    }
    
    // *text_158* updates
    if (t >= 12 && text_158.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_158.tStart = t;  // (not accounting for frame time here)
      text_158.frameNStart = frameN;  // exact frame index
      
      text_158.setAutoDraw(true);
    }

    frameRemains = 12 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_158.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_158.setAutoDraw(false);
    }
    
    // *text_159* updates
    if (t >= 13.5 && text_159.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_159.tStart = t;  // (not accounting for frame time here)
      text_159.frameNStart = frameN;  // exact frame index
      
      text_159.setAutoDraw(true);
    }

    frameRemains = 13.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_159.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_159.setAutoDraw(false);
    }
    
    // *text_160* updates
    if (t >= 14 && text_160.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_160.tStart = t;  // (not accounting for frame time here)
      text_160.frameNStart = frameN;  // exact frame index
      
      text_160.setAutoDraw(true);
    }

    frameRemains = 14 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_160.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_160.setAutoDraw(false);
    }
    
    // *text_161* updates
    if (t >= 14.5 && text_161.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_161.tStart = t;  // (not accounting for frame time here)
      text_161.frameNStart = frameN;  // exact frame index
      
      text_161.setAutoDraw(true);
    }

    frameRemains = 14.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_161.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_161.setAutoDraw(false);
    }
    
    // *text_162* updates
    if (t >= 15 && text_162.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_162.tStart = t;  // (not accounting for frame time here)
      text_162.frameNStart = frameN;  // exact frame index
      
      text_162.setAutoDraw(true);
    }

    frameRemains = 15 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_162.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_162.setAutoDraw(false);
    }
    
    // *text_163* updates
    if (t >= 15.5 && text_163.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_163.tStart = t;  // (not accounting for frame time here)
      text_163.frameNStart = frameN;  // exact frame index
      
      text_163.setAutoDraw(true);
    }

    frameRemains = 15.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_163.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_163.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sentence_series_part3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sentence_series_part3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sentence_series_part3' ---
    for (const thisComponent of sentence_series_part3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sentence_series_part4Components;
function sentence_series_part4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sentence_series_part4' ---
    t = 0;
    sentence_series_part4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(16.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    sentence_series_part4Components = [];
    sentence_series_part4Components.push(text_164);
    sentence_series_part4Components.push(text_165);
    sentence_series_part4Components.push(text_166);
    sentence_series_part4Components.push(text_167);
    sentence_series_part4Components.push(text_168);
    sentence_series_part4Components.push(text_169);
    sentence_series_part4Components.push(text_170);
    sentence_series_part4Components.push(text_171);
    sentence_series_part4Components.push(text_172);
    sentence_series_part4Components.push(text_173);
    sentence_series_part4Components.push(text_174);
    sentence_series_part4Components.push(text_175);
    sentence_series_part4Components.push(text_176);
    sentence_series_part4Components.push(text_177);
    sentence_series_part4Components.push(text_178);
    sentence_series_part4Components.push(text_179);
    sentence_series_part4Components.push(text_180);
    sentence_series_part4Components.push(text_181);
    sentence_series_part4Components.push(text_182);
    sentence_series_part4Components.push(text_183);
    sentence_series_part4Components.push(text_184);
    sentence_series_part4Components.push(text_185);
    sentence_series_part4Components.push(text_186);
    sentence_series_part4Components.push(text_187);
    sentence_series_part4Components.push(text_188);
    
    for (const thisComponent of sentence_series_part4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sentence_series_part4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sentence_series_part4' ---
    // get current time
    t = sentence_series_part4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_164* updates
    if (t >= 0 && text_164.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_164.tStart = t;  // (not accounting for frame time here)
      text_164.frameNStart = frameN;  // exact frame index
      
      text_164.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_164.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_164.setAutoDraw(false);
    }
    
    // *text_165* updates
    if (t >= 0.5 && text_165.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_165.tStart = t;  // (not accounting for frame time here)
      text_165.frameNStart = frameN;  // exact frame index
      
      text_165.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_165.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_165.setAutoDraw(false);
    }
    
    // *text_166* updates
    if (t >= 2 && text_166.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_166.tStart = t;  // (not accounting for frame time here)
      text_166.frameNStart = frameN;  // exact frame index
      
      text_166.setAutoDraw(true);
    }

    frameRemains = 2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_166.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_166.setAutoDraw(false);
    }
    
    // *text_167* updates
    if (t >= 2.5 && text_167.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_167.tStart = t;  // (not accounting for frame time here)
      text_167.frameNStart = frameN;  // exact frame index
      
      text_167.setAutoDraw(true);
    }

    frameRemains = 2.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_167.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_167.setAutoDraw(false);
    }
    
    // *text_168* updates
    if (t >= 3 && text_168.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_168.tStart = t;  // (not accounting for frame time here)
      text_168.frameNStart = frameN;  // exact frame index
      
      text_168.setAutoDraw(true);
    }

    frameRemains = 3 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_168.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_168.setAutoDraw(false);
    }
    
    // *text_169* updates
    if (t >= 3.5 && text_169.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_169.tStart = t;  // (not accounting for frame time here)
      text_169.frameNStart = frameN;  // exact frame index
      
      text_169.setAutoDraw(true);
    }

    frameRemains = 3.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_169.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_169.setAutoDraw(false);
    }
    
    // *text_170* updates
    if (t >= 4 && text_170.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_170.tStart = t;  // (not accounting for frame time here)
      text_170.frameNStart = frameN;  // exact frame index
      
      text_170.setAutoDraw(true);
    }

    frameRemains = 4 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_170.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_170.setAutoDraw(false);
    }
    
    // *text_171* updates
    if (t >= 4.5 && text_171.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_171.tStart = t;  // (not accounting for frame time here)
      text_171.frameNStart = frameN;  // exact frame index
      
      text_171.setAutoDraw(true);
    }

    frameRemains = 4.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_171.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_171.setAutoDraw(false);
    }
    
    // *text_172* updates
    if (t >= 5 && text_172.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_172.tStart = t;  // (not accounting for frame time here)
      text_172.frameNStart = frameN;  // exact frame index
      
      text_172.setAutoDraw(true);
    }

    frameRemains = 5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_172.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_172.setAutoDraw(false);
    }
    
    // *text_173* updates
    if (t >= 6.5 && text_173.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_173.tStart = t;  // (not accounting for frame time here)
      text_173.frameNStart = frameN;  // exact frame index
      
      text_173.setAutoDraw(true);
    }

    frameRemains = 6.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_173.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_173.setAutoDraw(false);
    }
    
    // *text_174* updates
    if (t >= 7 && text_174.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_174.tStart = t;  // (not accounting for frame time here)
      text_174.frameNStart = frameN;  // exact frame index
      
      text_174.setAutoDraw(true);
    }

    frameRemains = 7 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_174.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_174.setAutoDraw(false);
    }
    
    // *text_175* updates
    if (t >= 7.5 && text_175.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_175.tStart = t;  // (not accounting for frame time here)
      text_175.frameNStart = frameN;  // exact frame index
      
      text_175.setAutoDraw(true);
    }

    frameRemains = 7.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_175.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_175.setAutoDraw(false);
    }
    
    // *text_176* updates
    if (t >= 8 && text_176.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_176.tStart = t;  // (not accounting for frame time here)
      text_176.frameNStart = frameN;  // exact frame index
      
      text_176.setAutoDraw(true);
    }

    frameRemains = 8 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_176.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_176.setAutoDraw(false);
    }
    
    // *text_177* updates
    if (t >= 8.5 && text_177.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_177.tStart = t;  // (not accounting for frame time here)
      text_177.frameNStart = frameN;  // exact frame index
      
      text_177.setAutoDraw(true);
    }

    frameRemains = 8.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_177.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_177.setAutoDraw(false);
    }
    
    // *text_178* updates
    if (t >= 9 && text_178.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_178.tStart = t;  // (not accounting for frame time here)
      text_178.frameNStart = frameN;  // exact frame index
      
      text_178.setAutoDraw(true);
    }

    frameRemains = 9 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_178.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_178.setAutoDraw(false);
    }
    
    // *text_179* updates
    if (t >= 10.5 && text_179.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_179.tStart = t;  // (not accounting for frame time here)
      text_179.frameNStart = frameN;  // exact frame index
      
      text_179.setAutoDraw(true);
    }

    frameRemains = 10.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_179.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_179.setAutoDraw(false);
    }
    
    // *text_180* updates
    if (t >= 11 && text_180.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_180.tStart = t;  // (not accounting for frame time here)
      text_180.frameNStart = frameN;  // exact frame index
      
      text_180.setAutoDraw(true);
    }

    frameRemains = 11 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_180.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_180.setAutoDraw(false);
    }
    
    // *text_181* updates
    if (t >= 11.5 && text_181.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_181.tStart = t;  // (not accounting for frame time here)
      text_181.frameNStart = frameN;  // exact frame index
      
      text_181.setAutoDraw(true);
    }

    frameRemains = 11.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_181.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_181.setAutoDraw(false);
    }
    
    // *text_182* updates
    if (t >= 12 && text_182.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_182.tStart = t;  // (not accounting for frame time here)
      text_182.frameNStart = frameN;  // exact frame index
      
      text_182.setAutoDraw(true);
    }

    frameRemains = 12 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_182.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_182.setAutoDraw(false);
    }
    
    // *text_183* updates
    if (t >= 12.5 && text_183.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_183.tStart = t;  // (not accounting for frame time here)
      text_183.frameNStart = frameN;  // exact frame index
      
      text_183.setAutoDraw(true);
    }

    frameRemains = 12.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_183.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_183.setAutoDraw(false);
    }
    
    // *text_184* updates
    if (t >= 13 && text_184.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_184.tStart = t;  // (not accounting for frame time here)
      text_184.frameNStart = frameN;  // exact frame index
      
      text_184.setAutoDraw(true);
    }

    frameRemains = 13 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_184.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_184.setAutoDraw(false);
    }
    
    // *text_185* updates
    if (t >= 13.5 && text_185.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_185.tStart = t;  // (not accounting for frame time here)
      text_185.frameNStart = frameN;  // exact frame index
      
      text_185.setAutoDraw(true);
    }

    frameRemains = 13.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_185.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_185.setAutoDraw(false);
    }
    
    // *text_186* updates
    if (t >= 15 && text_186.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_186.tStart = t;  // (not accounting for frame time here)
      text_186.frameNStart = frameN;  // exact frame index
      
      text_186.setAutoDraw(true);
    }

    frameRemains = 15 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_186.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_186.setAutoDraw(false);
    }
    
    // *text_187* updates
    if (t >= 15.5 && text_187.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_187.tStart = t;  // (not accounting for frame time here)
      text_187.frameNStart = frameN;  // exact frame index
      
      text_187.setAutoDraw(true);
    }

    frameRemains = 15.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_187.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_187.setAutoDraw(false);
    }
    
    // *text_188* updates
    if (t >= 16 && text_188.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_188.tStart = t;  // (not accounting for frame time here)
      text_188.frameNStart = frameN;  // exact frame index
      
      text_188.setAutoDraw(true);
    }

    frameRemains = 16 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_188.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_188.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sentence_series_part4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sentence_series_part4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sentence_series_part4' ---
    for (const thisComponent of sentence_series_part4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_15_allKeys;
var sentence_series_part5Components;
function sentence_series_part5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sentence_series_part5' ---
    t = 0;
    sentence_series_part5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    sentence_series_part5Components = [];
    sentence_series_part5Components.push(text_189);
    sentence_series_part5Components.push(text_190);
    sentence_series_part5Components.push(text_191);
    sentence_series_part5Components.push(text_192);
    sentence_series_part5Components.push(text_193);
    sentence_series_part5Components.push(text_194);
    sentence_series_part5Components.push(text_195);
    sentence_series_part5Components.push(text_196);
    sentence_series_part5Components.push(text_197);
    sentence_series_part5Components.push(text_198);
    sentence_series_part5Components.push(text_199);
    sentence_series_part5Components.push(text_200);
    sentence_series_part5Components.push(text_201);
    sentence_series_part5Components.push(text_202);
    sentence_series_part5Components.push(text_203);
    sentence_series_part5Components.push(text_204);
    sentence_series_part5Components.push(text_205);
    sentence_series_part5Components.push(text_206);
    sentence_series_part5Components.push(text_207);
    sentence_series_part5Components.push(text_208);
    sentence_series_part5Components.push(text_209);
    sentence_series_part5Components.push(text_210);
    sentence_series_part5Components.push(text_211);
    sentence_series_part5Components.push(text_212);
    
    for (const thisComponent of sentence_series_part5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function sentence_series_part5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sentence_series_part5' ---
    // get current time
    t = sentence_series_part5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_189* updates
    if (t >= 0 && text_189.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_189.tStart = t;  // (not accounting for frame time here)
      text_189.frameNStart = frameN;  // exact frame index
      
      text_189.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_189.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_189.setAutoDraw(false);
    }
    
    // *text_190* updates
    if (t >= 0.5 && text_190.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_190.tStart = t;  // (not accounting for frame time here)
      text_190.frameNStart = frameN;  // exact frame index
      
      text_190.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_190.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_190.setAutoDraw(false);
    }
    
    // *text_191* updates
    if (t >= 1 && text_191.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_191.tStart = t;  // (not accounting for frame time here)
      text_191.frameNStart = frameN;  // exact frame index
      
      text_191.setAutoDraw(true);
    }

    frameRemains = 1 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_191.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_191.setAutoDraw(false);
    }
    
    // *text_192* updates
    if (t >= 2.5 && text_192.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_192.tStart = t;  // (not accounting for frame time here)
      text_192.frameNStart = frameN;  // exact frame index
      
      text_192.setAutoDraw(true);
    }

    frameRemains = 2.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_192.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_192.setAutoDraw(false);
    }
    
    // *text_193* updates
    if (t >= 3 && text_193.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_193.tStart = t;  // (not accounting for frame time here)
      text_193.frameNStart = frameN;  // exact frame index
      
      text_193.setAutoDraw(true);
    }

    frameRemains = 3 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_193.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_193.setAutoDraw(false);
    }
    
    // *text_194* updates
    if (t >= 3.5 && text_194.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_194.tStart = t;  // (not accounting for frame time here)
      text_194.frameNStart = frameN;  // exact frame index
      
      text_194.setAutoDraw(true);
    }

    frameRemains = 3.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_194.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_194.setAutoDraw(false);
    }
    
    // *text_195* updates
    if (t >= 4 && text_195.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_195.tStart = t;  // (not accounting for frame time here)
      text_195.frameNStart = frameN;  // exact frame index
      
      text_195.setAutoDraw(true);
    }

    frameRemains = 4 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_195.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_195.setAutoDraw(false);
    }
    
    // *text_196* updates
    if (t >= 4.5 && text_196.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_196.tStart = t;  // (not accounting for frame time here)
      text_196.frameNStart = frameN;  // exact frame index
      
      text_196.setAutoDraw(true);
    }

    frameRemains = 4.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_196.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_196.setAutoDraw(false);
    }
    
    // *text_197* updates
    if (t >= 5 && text_197.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_197.tStart = t;  // (not accounting for frame time here)
      text_197.frameNStart = frameN;  // exact frame index
      
      text_197.setAutoDraw(true);
    }

    frameRemains = 5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_197.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_197.setAutoDraw(false);
    }
    
    // *text_198* updates
    if (t >= 5.5 && text_198.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_198.tStart = t;  // (not accounting for frame time here)
      text_198.frameNStart = frameN;  // exact frame index
      
      text_198.setAutoDraw(true);
    }

    frameRemains = 5.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_198.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_198.setAutoDraw(false);
    }
    
    // *text_199* updates
    if (t >= 7 && text_199.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_199.tStart = t;  // (not accounting for frame time here)
      text_199.frameNStart = frameN;  // exact frame index
      
      text_199.setAutoDraw(true);
    }

    frameRemains = 7 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_199.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_199.setAutoDraw(false);
    }
    
    // *text_200* updates
    if (t >= 7.5 && text_200.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_200.tStart = t;  // (not accounting for frame time here)
      text_200.frameNStart = frameN;  // exact frame index
      
      text_200.setAutoDraw(true);
    }

    frameRemains = 7.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_200.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_200.setAutoDraw(false);
    }
    
    // *text_201* updates
    if (t >= 8 && text_201.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_201.tStart = t;  // (not accounting for frame time here)
      text_201.frameNStart = frameN;  // exact frame index
      
      text_201.setAutoDraw(true);
    }

    frameRemains = 8 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_201.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_201.setAutoDraw(false);
    }
    
    // *text_202* updates
    if (t >= 8.5 && text_202.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_202.tStart = t;  // (not accounting for frame time here)
      text_202.frameNStart = frameN;  // exact frame index
      
      text_202.setAutoDraw(true);
    }

    frameRemains = 8.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_202.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_202.setAutoDraw(false);
    }
    
    // *text_203* updates
    if (t >= 9 && text_203.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_203.tStart = t;  // (not accounting for frame time here)
      text_203.frameNStart = frameN;  // exact frame index
      
      text_203.setAutoDraw(true);
    }

    frameRemains = 9 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_203.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_203.setAutoDraw(false);
    }
    
    // *text_204* updates
    if (t >= 9.5 && text_204.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_204.tStart = t;  // (not accounting for frame time here)
      text_204.frameNStart = frameN;  // exact frame index
      
      text_204.setAutoDraw(true);
    }

    frameRemains = 9.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_204.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_204.setAutoDraw(false);
    }
    
    // *text_205* updates
    if (t >= 10 && text_205.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_205.tStart = t;  // (not accounting for frame time here)
      text_205.frameNStart = frameN;  // exact frame index
      
      text_205.setAutoDraw(true);
    }

    frameRemains = 10 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_205.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_205.setAutoDraw(false);
    }
    
    // *text_206* updates
    if (t >= 11.5 && text_206.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_206.tStart = t;  // (not accounting for frame time here)
      text_206.frameNStart = frameN;  // exact frame index
      
      text_206.setAutoDraw(true);
    }

    frameRemains = 11.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_206.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_206.setAutoDraw(false);
    }
    
    // *text_207* updates
    if (t >= 12 && text_207.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_207.tStart = t;  // (not accounting for frame time here)
      text_207.frameNStart = frameN;  // exact frame index
      
      text_207.setAutoDraw(true);
    }

    frameRemains = 12 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_207.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_207.setAutoDraw(false);
    }
    
    // *text_208* updates
    if (t >= 12.5 && text_208.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_208.tStart = t;  // (not accounting for frame time here)
      text_208.frameNStart = frameN;  // exact frame index
      
      text_208.setAutoDraw(true);
    }

    frameRemains = 12.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_208.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_208.setAutoDraw(false);
    }
    
    // *text_209* updates
    if (t >= 13 && text_209.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_209.tStart = t;  // (not accounting for frame time here)
      text_209.frameNStart = frameN;  // exact frame index
      
      text_209.setAutoDraw(true);
    }

    frameRemains = 13 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_209.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_209.setAutoDraw(false);
    }
    
    // *text_210* updates
    if (t >= 13.5 && text_210.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_210.tStart = t;  // (not accounting for frame time here)
      text_210.frameNStart = frameN;  // exact frame index
      
      text_210.setAutoDraw(true);
    }

    frameRemains = 13.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_210.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_210.setAutoDraw(false);
    }
    
    // *text_211* updates
    if (t >= 14 && text_211.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_211.tStart = t;  // (not accounting for frame time here)
      text_211.frameNStart = frameN;  // exact frame index
      
      text_211.setAutoDraw(true);
    }

    frameRemains = 14 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_211.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_211.setAutoDraw(false);
    }
    
    // *text_212* updates
    if (t >= 14.5 && text_212.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_212.tStart = t;  // (not accounting for frame time here)
      text_212.frameNStart = frameN;  // exact frame index
      
      text_212.setAutoDraw(true);
    }

    frameRemains = 14.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_212.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_212.setAutoDraw(false);
    }
    


    
    // *key_resp_15* updates
    if (t >= 16 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sentence_series_part5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sentence_series_part5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sentence_series_part5' ---
    for (const thisComponent of sentence_series_part5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_15.corr, level);
    }
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "sentence_series_part5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

function final_step() {
    if ((Math.random() > 0.385)) {
        window.location.href = "/success?t=done";
    } else {
        window.location.href = "/fail?t=sentence_v";
    } }  