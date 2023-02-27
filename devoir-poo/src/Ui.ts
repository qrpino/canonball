///<reference path="../references/references.ts" />

class Ui {
    private static instance: Ui;
    private sliders: Array<any>;
    private constructor() {
        this.setup();
    };
    private setup(): void {
        /** @type Array of cannon sliders
         * 1) Azimuth slider
         * 2) Inclinaison slider
         * 3) Power slider
        */
        this.sliders = [createSlider(-90, 90, 0, 1),
        createSlider(0, 90, 0, 1),
        createSlider(0.1, 1000, 1, 0.1)
        ];
    }
    public static getInstance(): Ui {
        if (!Ui.instance) {
            Ui.instance = new Ui();
        }
        return Ui.instance;
    };
    public getSliders(sliderType?: SliderType): any {
        switch (sliderType) {
            case SliderType.Azimuth: {
                return this.sliders[SliderType.Azimuth];
                break;
            }
            case SliderType.Inclination: {
                return this.sliders[SliderType.Inclination];
                break;
            }
            case SliderType.Power: {
                return this.sliders[SliderType.Power];
                break;
            }
            default: {
                if(!sliderType){
                    return this.sliders;
                } 
                else{
                    alert('Wrong Slider parameter function getSlider();');
                }
                break;
            }
        }
    }
}