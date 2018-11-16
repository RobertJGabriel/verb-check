'use strict';
const ENGLISH_VERBS = [
  'be',
  'is',
  'are',
  'was',
  'were',
  'been',
  'beat',
  'beat',
  'beaten',
  'become',
  'became',
  'become',
  'begin',
  'began',
  'begun',
  'bend',
  'bent',
  'bet',
  'bet',
  'bid',
  'bid',
  'bite',
  'bit',
  'bitten',
  'blow',
  'blew',
  'blown',
  'break',
  'broke',
  'broken',
  'bring',
  'brought',
  'build',
  'built',
  'burn',
  'burned',
  'burnt',
  'buy',
  'bought',
  'catch',
  'caught',
  'choose',
  'chose',
  'chosen',
  'come',
  'came',
  'come',
  'cost',
  'cost',
  'cut',
  'cut',
  'dig',
  'dug',
  'dive',
  'dove',
  'dived',
  'do',
  'did',
  'done',
  'draw',
  'drew',
  'drawn',
  'dream',
  'dreameddreamt',
  'dreamed',
  'dreamt',
  'drive',
  'drove',
  'driven',
  'drink',
  'drank',
  'drunk',
  'eat',
  'ate',
  'eaten',
  'fall',
  'fell',
  'fallen',
  'feel',
  'felt',
  'fight',
  'fought',
  'find',
  'found',
  'fly',
  'flew',
  'flown',
  'forget',
  'forgot',
  'forgotten',
  'forgive',
  'forgave',
  'forgiven',
  'freeze',
  'froze',
  'frozen',
  'get',
  'got',
  'gotten',
  'give',
  'gave',
  'given',
  'go',
  'went',
  'gone',
  'grow',
  'grew',
  'grown',
  'hang',
  'hung',
  'have',
  'had',
  'hear',
  'heard',
  'hide',
  'hid',
  'hidden',
  'hit',
  'hit',
  'hold',
  'held',
  'hurt',
  'hurt',
  'keep',
  'kept',
  'know',
  'knew',
  'known',
  'lay',
  'laid',
  'lead',
  'led',
  'leave',
  'left',
  'lend',
  'lent',
  'lie',
  'lay',
  'lain',
  'lose',
  'lost',
  'make',
  'made',
  'mean',
  'meant',
  'meet',
  'met',
  'pay',
  'paid',
  'put',
  'put',
  'read',
  'read',
  'ride',
  'rode',
  'ridden',
  'ring',
  'rang',
  'rung',
  'rise',
  'rose',
  'risen',
  'run',
  'ran',
  'run',
  'say',
  'said',
  'see',
  'saw',
  'seen',
  'sell',
  'sold',
  'send',
  'sent',
  'show',
  'showed',
  'shown',
  'shut',
  'shut',
  'sing',
  'sang',
  'sung',
  'sit',
  'sat',
  'sleep',
  'slept',
  'speak',
  'spoke',
  'spoken',
  'spend',
  'spent',
  'stand',
  'stood',
  'swim',
  'swam',
  'swum',
  'take',
  'took',
  'taken',
  'teach',
  'taught',
  'tear',
  'tore',
  'torn',
  'tell',
  'told',
  'think',
  'thought',
  'throw',
  'threw',
  'thrown',
  'understand',
  'understood',
  'wake',
  'woke',
  'woken',
  'wear',
  'wore',
  'worn',
  'win',
  'won',
  'write',
  'wrote',
  'written '
];
/**
 * @param  {string} needle test
 * @returns {boolean} needle
 */
function check(needle) {
  if (typeof needle !== 'string') return false;
  needle = needle.toLowerCase();

  return ENGLISH_VERBS.includes(needle);
}
exports.check = check;