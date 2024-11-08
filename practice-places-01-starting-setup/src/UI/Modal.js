export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById("modal-template");
  }

  show() {
    if ("content" in document.createElement("template")) {
      // 再帰的なNodeまたはDocumentFragmentのコピーを作る。
      this.modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      // 各要素を確保する
      this.modalElement = this.modalElements.querySelector(".modal");
      this.backdropElement = this.modalElements.querySelector(".backdrop");
      // contentIdのcontentを取得する
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );
      // つける
      this.modalElement.appendChild(contentElement);
      // document.bodyに挿入する
      document.body.insertAdjacentElement("afterbegin", this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      alert(this.fallbackText);
    }
  }

  hide() {
    // 単純にdisplay='none'にしてみた
    // classNameで探すと配列が返される
    // const bdp = document.getElementsByClassName("backdrop");
    // const mdl = document.getElementsByClassName("modal");
    // for(let i=0; i<bdp.length; i++) bdp[i].style.display = 'none';
    // for(let i=0; i<mdl.length; i++) mdl[i].style.display = 'none';

    if(this.modalElement) document.body.removeChild(this.modalElement);
    if(this.backdropElement) document.body.removeChild(this.backdropElement);
    // もしくは this.modalElement.remove();

    this.modalElement = null;
    this.backdropElement = null;
  }
}
