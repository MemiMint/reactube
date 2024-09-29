import { makeObservable, observable, action } from "mobx";

class LoadingStore {
  public loading: boolean = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      toggleLoading: action,
    });
  }

  public toggleLoading(): void {
    this.loading = !this.loading;
  }
}

const loadingStore = new LoadingStore();

export default loadingStore;
