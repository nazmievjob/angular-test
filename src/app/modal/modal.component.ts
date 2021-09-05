 import {Component, EventEmitter, Output} from '@angular/core';
 import {FormGroup, FormBuilder,  Validators} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {
  form: FormGroup
  taskobj: object
  name: string
  f_like: string
  f_repost: string
  f_subscribe: string
  like_price: number
  repost_price: number
  sub_price: number
  sum_price: number
  st_price: string
  st_sum: string

  constructor(private fb: FormBuilder) {
    this.taskobj = {}
    this.name = ''
    this.f_like = ''
    this.f_repost = ''
    this.f_subscribe = ''
    this.like_price = 0
    this.repost_price = 0
    this.sub_price = 0
    this.sum_price = 0
    this.st_price = '0'
    this.st_sum = '0'
    const reg = '^(ftp|http|https):\\/\\/[^ "]+$';
    this.form = this.fb.group({
      s_url: ['', [Validators.required, Validators.pattern(reg)]],
      like: 0,
      repost: 0,
      subscribe: 0,
    });
  }

  get s_url() {
    return this.form.controls.s_url
  };

  get post() {
    return this.form.controls.s_url.value.indexOf('account')
  }

  @Output()
  onRemove = new EventEmitter

  @Output()
  onAdd = new EventEmitter

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  getCountLike(event: Event): string {
    let count = (event.target as HTMLInputElement).value
    this.like_price = Number(count) * 2
    if(this.repost_price == 0) {
      this.st_sum = String(this.like_price)
    } else {
      this.st_sum = String(this.like_price + this.repost_price)
    }

    return this.f_like = (event.target as HTMLInputElement).value
  }

  getCountRepost(event: Event): string {
    let count = (event.target as HTMLInputElement).value
    this.repost_price = (Number(count) * 2.2)
    this.st_price = Number(this.repost_price).toFixed()
    if(this.like_price == 0) {
      this.st_sum = String(this.repost_price)
    } else {
      this.st_sum = String(this.like_price + this.repost_price)
    }

    return this.f_repost = (event.target as HTMLInputElement).value
  }

  getCountSubscribe(event: Event): string {
    let count = (event.target as HTMLInputElement).value
    this.sub_price = (Number(count) * 4)
    this.st_sum = String(this.sub_price)

    return this.f_subscribe = (event.target as HTMLInputElement).value
  }

  onRemoveClick() {
    this.onRemove.emit();
  }

  submit() {
    this.taskobj = {
      id: 3,
      like: this.form.controls.like.value,
      repost: this.form.controls.repost.value,
      subscribe: this.form.controls.subscribe.value
    }
    this.onRemove.emit();
    this.onAdd.emit(this.taskobj);
  }
}
