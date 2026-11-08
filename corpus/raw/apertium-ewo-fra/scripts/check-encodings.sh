#!/bin/bash
lt-expand apertium-ewo-fra.ewo-fra.dix | cut -f1 -d':' | grep --colour '[áéíóúâêîôûàèìòùǎěǐǒǔāēīōū]' 
