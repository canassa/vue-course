const HEAL_BASE = 15;
const PLAYER_ATTACK_BASE = -10;
const MONSTER_ATTACK_BASE = -8;

let game = new Vue({
    el: "#app",
    data: {
        entity: {
            player: 100,
            monster: 100,
        },
        gameState: 'stopped',
        playerHealth: 100,
        monsterHealth: 100,
        attackLog: []
    },
    methods: {
        startGame() {
            this.entity.player = 100;
            this.entity.monster = 100;
            this.attackLog = [];

            this.gameState = 'running';
        },
        updateHealth(entityName, amount) {
            amount = Math.floor(Math.random() * amount);
            let newHealth = this.entity[entityName] + amount;
            this.entity[entityName] = Math.min(Math.max(newHealth, 0), 100);
            this.attackLog.push({
                'attacker': entityName == 'player' ? 'monster' : 'player',
                'defender': entityName,
                'type': amount > 0 ? 'heal' : 'attack',
                'amount': Math.abs(amount),
            });
        },
        getLogColor(log) {
            if (log.type == 'heal') return '#6967ff';
            if (log.attacker == 'monster') return '#ff7367';
            return '#aaffb0';
        },
        attack(special) {
            let multiplier = special ? 2 : 1;
            this.updateHealth('monster', PLAYER_ATTACK_BASE * multiplier);
            this.endTurn();
        },
        heal() {
            this.updateHealth('player', HEAL_BASE);
            this.endTurn();
        },
        endGameDialog(won) {
            let result = won ? 'won' : 'lost';
            if (confirm(`You ${result}! Start a new game?`)) {
                this.startGame();
            }
            else {
                this.gameState = 'stopped';
            }

        },
        endTurn() {
            if (this.entity.monster === 0) {
                this.endGameDialog(true);
            }
            else {
                this.updateHealth('player', MONSTER_ATTACK_BASE);
                if (this.entity.player === 0) this.endGameDialog(false);
            }
        }
    }
})
