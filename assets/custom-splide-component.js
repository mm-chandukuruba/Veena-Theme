class SpliderComponent extends HTMLElement{
  constructor(){
    super()
    this.element = this.querySelector(".splide")
    this.options = JSON.parse(this.dataset.sliderSettings);
    this.intializer()
    console.log("Splider section")
  }

  intializer(){
   const splide=new Splide(this.element,this.options)
    splide.mount()
  }
}

customElements.define("splider-component",SpliderComponent)
