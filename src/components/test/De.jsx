import React from "react";

export default class De extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            face: null,
            count: 0,
            done: false,
            rolling: false
        };
        this.roll = this.roll.bind(this);
        this.restart = this.restart.bind(this);
        this.message = "Félicitations! Vous avez gagné!";
        this.targetFace = props.cache || 6;
    }

    roll() {
        if (this.state.rolling || this.state.done) return;
        
        // Start rolling animation
        this.setState({ rolling: true });
        
        // Simulate rolling animation for 600ms
        const rollInterval = setInterval(() => {
            const tempFace = Math.floor(Math.random() * 6) + 1;
            this.setState({ face: tempFace });
        }, 100);
        
        // After animation, set final face
        setTimeout(() => {
            clearInterval(rollInterval);
            const newFace = Math.floor(Math.random() * 6) + 1;
            
            this.setState(last => ({ 
                face: newFace, 
                count: last.count + 1,
                rolling: false
            }));
            
            if (newFace === this.targetFace) {
                this.setState({ done: true });
            }
        }, 600);
    }

    restart() {
        this.setState({ 
            face: null, 
            count: 0, 
            done: false, 
            rolling: false 
        });
    }

    renderDiceFace() {
        const { face } = this.state;
        
        if (!face) {
            return (
                <div className="dice-face dice-empty">
                    <div className="dice-text">?</div>
                </div>
            );
        }
        
        // Dice face dot configurations for faces 1-6
        const dotPositions = {
            1: ["center"],
            2: ["top-left", "bottom-right"],
            3: ["top-left", "center", "bottom-right"],
            4: ["top-left", "top-right", "bottom-left", "bottom-right"],
            5: ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
            6: ["top-left", "top-right", "middle-left", "middle-right", "bottom-left", "bottom-right"]
        };
        
        return (
            <div className={`dice-face face-${face} ${this.state.rolling ? 'rolling' : ''}`}>
                {dotPositions[face].map((position, index) => (
                    <div key={index} className={`dice-dot ${position}`}></div>
                ))}
            </div>
        );
    }

    render() {
        const { face, count, done, rolling } = this.state;
        
        return (
            <main className="de-main">
                <div className="game-container">
                    <header className="game-header">
                        <h1 className="game-title">🎲 Jeu de Dé</h1>
                        <p className="game-subtitle">Tentez d'obtenir la face {this.targetFace} pour gagner!</p>
                    </header>
                    
                    <div className="game-stats">
                        <div className="stat-box">
                            <div className="stat-label">Face actuelle</div>
                            <div className="stat-value">{face || "-"}</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-label">Nombre d'essais</div>
                            <div className="stat-value">{count}</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-label">Face cible</div>
                            <div className="stat-value target">{this.targetFace}</div>
                        </div>
                    </div>
                    
                    <div className="dice-container">
                        {this.renderDiceFace()}
                        <div className="dice-label">
                            {face ? `Face ${face}` : "Prêt à lancer"}
                        </div>
                    </div>
                    
                    {done ? (
                        <div className="result-panel win">
                            <div className="result-icon">🏆</div>
                            <div className="result-message">{this.message}</div>
                            <div className="result-details">
                                Vous avez réussi en <span className="highlight">{count}</span> essai{count > 1 ? 's' : ''}!
                            </div>
                            <button 
                                className="btn btn-restart" 
                                onClick={this.restart}
                            >
                                <span className="btn-icon">🔄</span>
                                Recommencer
                            </button>
                        </div>
                    ) : (
                        <div className="controls">
                            <button 
                                className={`btn btn-roll ${rolling ? 'rolling' : ''}`} 
                                onClick={this.roll}
                                disabled={rolling}
                            >
                                <span className="btn-icon">🎲</span>
                                {rolling ? "Lancement en cours..." : "Lancer le dé"}
                            </button>
                            
                            {count > 0 && (
                                <button 
                                    className="btn btn-reset" 
                                    onClick={this.restart}
                                >
                                    <span className="btn-icon">↺</span>
                                    Réinitialiser
                                </button>
                            )}
                        </div>
                    )}
                    
                    <div className="instructions">
                        <h3>Comment jouer:</h3>
                        <ol>
                            <li>Cliquez sur "Lancer le dé" pour lancer le dé</li>
                            <li>Essayez d'obtenir la face {this.targetFace} pour gagner</li>
                            <li>Le jeu compte le nombre d'essais nécessaires</li>
                        </ol>
                    </div>
                </div>
                
                <style jsx>{`
                    .de-main {
                        min-height: 100vh;
                        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }
                    
                    .game-container {
                        background-color: white;
                        border-radius: 24px;
                        box-shadow: 0 20px 40px rgba(120, 53, 15, 0.1);
                        padding: 40px;
                        max-width: 800px;
                        width: 100%;
                        text-align: center;
                    }
                    
                    .game-header {
                        margin-bottom: 30px;
                    }
                    
                    .game-title {
                        color: #92400e;
                        font-size: 2.8rem;
                        margin: 0 0 10px 0;
                        text-shadow: 2px 2px 0 rgba(245, 158, 11, 0.2);
                    }
                    
                    .game-subtitle {
                        color: #d97706;
                        font-size: 1.3rem;
                        margin: 0;
                    }
                    
                    .game-stats {
                        display: flex;
                        justify-content: space-between;
                        margin: 30px 0;
                        flex-wrap: wrap;
                        gap: 15px;
                    }
                    
                    .stat-box {
                        flex: 1;
                        min-width: 120px;
                        background: #fffbeb;
                        border-radius: 16px;
                        padding: 20px 10px;
                        border: 2px solid #fcd34d;
                    }
                    
                    .stat-label {
                        color: #92400e;
                        font-size: 1rem;
                        margin-bottom: 8px;
                        font-weight: 600;
                    }
                    
                    .stat-value {
                        color: #d97706;
                        font-size: 2.5rem;
                        font-weight: 800;
                    }
                    
                    .stat-value.target {
                        color: #059669;
                    }
                    
                    .dice-container {
                        margin: 40px 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .dice-face {
                        width: 180px;
                        height: 180px;
                        background-color: white;
                        border-radius: 20px;
                        border: 8px solid #f59e0b;
                        box-shadow: 0 10px 25px rgba(120, 53, 15, 0.2);
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 20px;
                        transition: transform 0.3s ease;
                    }
                    
                    .dice-face.rolling {
                        animation: rollAnimation 0.6s infinite;
                    }
                    
                    @keyframes rollAnimation {
                        0% { transform: rotate(0deg) scale(1); }
                        25% { transform: rotate(90deg) scale(1.05); }
                        50% { transform: rotate(180deg) scale(1); }
                        75% { transform: rotate(270deg) scale(1.05); }
                        100% { transform: rotate(360deg) scale(1); }
                    }
                    
                    .dice-face.dice-empty {
                        background-color: #fef3c7;
                        border-style: dashed;
                        border-color: #fbbf24;
                    }
                    
                    .dice-text {
                        font-size: 4rem;
                        color: #f59e0b;
                        font-weight: 800;
                    }
                    
                    .dice-dot {
                        position: absolute;
                        width: 28px;
                        height: 28px;
                        background-color: #92400e;
                        border-radius: 50%;
                    }
                    
                    /* Dice dot positions */
                    .dice-dot.center {
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    
                    .dice-dot.top-left {
                        top: 30px;
                        left: 30px;
                    }
                    
                    .dice-dot.top-right {
                        top: 30px;
                        right: 30px;
                    }
                    
                    .dice-dot.middle-left {
                        top: 50%;
                        left: 30px;
                        transform: translateY(-50%);
                    }
                    
                    .dice-dot.middle-right {
                        top: 50%;
                        right: 30px;
                        transform: translateY(-50%);
                    }
                    
                    .dice-dot.bottom-left {
                        bottom: 30px;
                        left: 30px;
                    }
                    
                    .dice-dot.bottom-right {
                        bottom: 30px;
                        right: 30px;
                    }
                    
                    .dice-label {
                        font-size: 1.4rem;
                        color: #92400e;
                        font-weight: 600;
                        background: #fffbeb;
                        padding: 10px 25px;
                        border-radius: 50px;
                        margin-top: 10px;
                    }
                    
                    .result-panel {
                        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
                        border-radius: 20px;
                        padding: 30px;
                        margin: 30px 0;
                        border: 3px solid #10b981;
                    }
                    
                    .result-panel.win {
                        animation: pulse 2s infinite;
                    }
                    
                    @keyframes pulse {
                        0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
                        70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
                    }
                    
                    .result-icon {
                        font-size: 4rem;
                        margin-bottom: 15px;
                    }
                    
                    .result-message {
                        color: #065f46;
                        font-size: 1.8rem;
                        font-weight: 700;
                        margin-bottom: 10px;
                    }
                    
                    .result-details {
                        color: #047857;
                        font-size: 1.3rem;
                        margin-bottom: 25px;
                    }
                    
                    .highlight {
                        background-color: #10b981;
                        color: white;
                        padding: 2px 10px;
                        border-radius: 10px;
                        font-weight: 800;
                    }
                    
                    .controls {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        margin: 40px 0;
                        flex-wrap: wrap;
                    }
                    
                    .btn {
                        padding: 18px 30px;
                        border: none;
                        border-radius: 16px;
                        font-size: 1.2rem;
                        font-weight: 700;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        transition: all 0.3s ease;
                        min-width: 220px;
                    }
                    
                    .btn-roll {
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        color: white;
                        box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
                    }
                    
                    .btn-roll:hover:not(:disabled) {
                        transform: translateY(-5px);
                        box-shadow: 0 12px 25px rgba(245, 158, 11, 0.5);
                    }
                    
                    .btn-roll:disabled {
                        opacity: 0.7;
                        cursor: not-allowed;
                    }
                    
                    .btn-roll.rolling {
                        background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
                    }
                    
                    .btn-restart {
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        color: white;
                        box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
                    }
                    
                    .btn-restart:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 12px 25px rgba(16, 185, 129, 0.5);
                    }
                    
                    .btn-reset {
                        background: white;
                        color: #92400e;
                        border: 3px solid #f59e0b;
                    }
                    
                    .btn-reset:hover {
                        background: #fffbeb;
                        transform: translateY(-3px);
                    }
                    
                    .btn-icon {
                        font-size: 1.5rem;
                    }
                    
                    .instructions {
                        background: #fef3c7;
                        border-radius: 16px;
                        padding: 25px;
                        margin-top: 40px;
                        text-align: left;
                    }
                    
                    .instructions h3 {
                        color: #92400e;
                        margin-top: 0;
                        margin-bottom: 15px;
                        font-size: 1.4rem;
                    }
                    
                    .instructions ol {
                        color: #b45309;
                        padding-left: 20px;
                        margin: 0;
                    }
                    
                    .instructions li {
                        margin-bottom: 8px;
                        line-height: 1.5;
                    }
                    
                    @media (max-width: 768px) {
                        .game-container {
                            padding: 25px;
                        }
                        
                        .game-title {
                            font-size: 2.2rem;
                        }
                        
                        .game-stats {
                            flex-direction: column;
                            align-items: center;
                        }
                        
                        .stat-box {
                            width: 100%;
                            max-width: 250px;
                        }
                        
                        .controls {
                            flex-direction: column;
                            align-items: center;
                        }
                        
                        .btn {
                            width: 100%;
                            max-width: 300px;
                        }
                    }
                `}</style>
            </main>
        );
    }
}