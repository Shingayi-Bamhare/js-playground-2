import _ from 'lodash';
import { createStore, combineReducers } from 'redux';
import axios from 'axios';
import moment from 'moment-timezone';

_.extend(window, { _, axios, moment, Redux: { createStore, combineReducers } });
