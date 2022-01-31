class TextService {
  static instance: TextService;

  constructor() {
    if (!TextService.instance) {
      TextService.instance = this;
    }

    return TextService.instance;
  }
}
const textService = new TextService();

export default textService;
