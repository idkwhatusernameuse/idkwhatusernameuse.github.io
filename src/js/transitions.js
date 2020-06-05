import Highway from '@dogstudio/highway'
import {TimelineLite} from 'gsap'

class Fade extends Highway.Transition {
    in ({from, to, done}) {
        const tl = new TimelineLite();
        tl.fromTo(to, 0.7,
            { left: '100%' },
            { 
                left: '0%',
                onComplete: function() { 
                    from.remove()
                    done() 
                }
            }
        )
    }
    out ({from, done}) {
        const tl = new TimelineLite();
        tl.fromTo(from, 0.7,
            { left: '0%' },
            {
                left: '-100%',
                onComplete: function() {
                    done()
                }
            }
        )
    }
}

export default Fade;