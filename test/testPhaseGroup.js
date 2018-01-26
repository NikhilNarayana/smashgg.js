'use strict';

let _ = require('lodash');

let PhaseGroup = require('../lib/PhaseGroup');
let Cache = require('../lib/util/Cache').getInstance();

let chai = require('chai');
let cap = require('chai-as-promised');
chai.use(cap);

let expect = chai.expect;
let assert = chai.assert;

let phaseGroup1 = {};
let phaseGroup2 = {};
let phaseGroup3 = {};
let phaseGroup4 = {};

const ID1 = 0;
const ID2 = 0;
const ID3 = 301994;

let expected = _.extend(

);


function loadPhaseGroup(id, expands, isCached){
    return new Promise(function(resolve, reject){
        let PG = new PhaseGroup(id, expands, isCached);
        PG.on('ready', function(){
            resolve(PG);
        })
    })
}


describe('Smash GG Phase Group', function(){

    before(function(){
        Cache.flush();
    });

    it('should correctly load Phase Group data', function(done){
        this.timeout(5000);

        phaseGroup3 = new PhaseGroup(ID3);
        phaseGroup3.on('ready', done);
    });

    it('should get all entrants', async function(){
        this.timeout(5000);

        let players = await phaseGroup3.getPlayers();
        expect(players.length).to.be.equal(15);
        return true;
    });

    it('should get all sets', async function(){
        this.timeout(5000);

        let sets = await phaseGroup3.getSets();
        expect(sets.length).to.be.equal(27);
        return true;
    });

});