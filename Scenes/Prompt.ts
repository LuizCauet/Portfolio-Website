import Phaser from "phaser";

export default class Prompt extends Phaser.Scene {
    private yes!: Phaser.GameObjects.Text;
    private no!: Phaser.GameObjects.Text;
    private noBlock!: Phaser.GameObjects.Text;

    constructor() {
        super("Prompt");
    }

    create() {
        const areYouSure = this.add.text(105, 70, 'Are you sure?', {color: '#fff'})
            .setAlpha(0);
        
        this.tweens.add({
            targets: areYouSure,
            alpha: 1,
            duration: 5000,
            ease: "linear",
        });

        this.yes = this.add.text(125, 110, 'YES', {color: '#ffffffff'})
            .setAlpha(0)
            .setInteractive( {useHandCursor: true} )
            .on('pointerover', () => this.enterButtonHoverState() )
            .on('pointerout', () => this.enterButtonRestState() )
            .on('pointerdown', () => this.switchToScene("Standard") );

        this.no = this.add.text(180, 110, 'NO', {color: '#fff'})
            .setAlpha(0);
        this.noBlock = this.add.text(180, 110, '##', {color: '#fff'})
            .setAlpha(0)
            .setInteractive( {useHandCursor: true})
            .on('pointerover', () => this.enterNoButtonHoverState() )
            .on('pointerout', () => this.enterNoButtonRestState() )
            .on('pointerdown', () => this.noButtonClick() )
            .on('pointerup', () => this.enterNoButtonHoverState() );

        this.tweens.add({
        targets: [this.yes, this.no, this.noBlock],
        alpha: 0.8,
        delay: 2000,
        duration: 5000,
        ease: "linear",
     });
    }


    // Yes Functions
    enterButtonHoverState() {
        this.yes.setStyle({color: '#920192ff'});
    }

    enterButtonRestState() {
        this.yes.setStyle({color: '#fff'});
    }

    switchToScene(scene: string) {
        this.yes.setStyle({color: '#00f238ff'});
        
        console.log("switching to scene: " + scene);
        this.cameras.main.fadeOut(1500, 0, 0, 0);
        this.cameras.main.once("camerafadeoutcomplete", () => this.scene.start(scene));
    }

    // No & NoBlock Functions
    enterNoButtonHoverState() {
        this.no.setStyle({color: '#ff0000ff'});
        this.noBlock.setStyle({color: '#ff0000ff'});
    }
    enterNoButtonRestState() {
        this.no.setStyle({color: '#fff'});
        this.noBlock.setStyle({color: '#fff'});
    }
    noButtonClick () {
        this.no.setStyle({color: '#fff'});
        this.noBlock.setStyle({color: '#fff'});
        this.cameras.main.shake(200, 0.02);
    }
}