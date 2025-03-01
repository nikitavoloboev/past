import * as dat from 'dat.gui';
import { App } from './app';

export function init_gui(app: App) {
    const gui = new dat.GUI();
    const folder = gui.addFolder("Particles")
    folder.add(app, "num_particles").listen().name("Number of particles")
    folder.add(app, "mul2").name("x2 particles")
    folder.add(app, "div2").name("/2 particles")
    gui.add(app, "energy_conservation", .9, 1.1, .0001).listen().name("Energy conservation")
    gui.add(app, "power", 0, 1_000).name("Power")
    gui.addColor(app, "color_origin")
    gui.addColor(app, "color_fast")
    gui.add(app, "color_alpha", 0, 1)
    gui.add(app, "size_particles", -1, 10, .01)
    // Not relevant without AI bits:
    // gui.add(app, "currentPrompt").name('Prompt');
    // gui.add(app, "currentPromptStrength").name('Prompt Strength').min(0.04).max(1).step(.01);
    // gui.add(app, "currentPromptSteps").name('Prompt Steps').min(1).max(40).step(.5);
    gui.add(app, "frame", 0, 1000).name("Frame").listen()
    gui.add(app, 'a1', 0, 1, 0.01).onChange(app.reset_particles.bind(app));
    gui.add(app, 'a2', 0, 1, 0.01).onChange(app.reset_particles.bind(app));
    gui.add(app, 'a3', 0, 1, 0.01).onChange(app.reset_particles.bind(app));
    gui.add(app, 'f1', 1, 10, 1).onChange(app.reset_particles.bind(app));
    gui.add(app, 'f2', 1, 10, 1).onChange(app.reset_particles.bind(app));
    gui.add(app, 'f3', 1, 10, 1).onChange(app.reset_particles.bind(app));
    gui.add(app, 'decay', 0.99, 1.01, 0.001).onChange(app.reset_particles.bind(app));
    gui.add(app, "reset_particles").name("Reset")
}
