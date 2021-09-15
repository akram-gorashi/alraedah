import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-business',
  templateUrl: './support-business.component.html',
  styleUrls: ['./support-business.component.scss']
})
export class SupportBusinessComponent implements OnInit {
  supportBusiness: any[] = [
    {
      icon: 'fa',
      title: 'الإدارة الإلكترونية لأعمال اللجان',
      desc: ' انسيابية ومرونة،و تطوير آلية العمل في إدارة اجتماعات مجلس إدارتها ولجانها الرئيسة والفرعية وفرق العمل بها.'
    },

    {
      icon: 'fa',
      title: 'لجان غرفة الرياض',
      desc: 'من أهم آليات الأداء التنموي لغرفة الرياض، وأحد وسائل تبني قضايا المشتركين وتطلعاتهم؛ تعمل على تشخيص المعوقات وتبني الحلول والاتصال نيابةً عن المستثمرين مع القيادات التنفيذية المختلفة'
    },
    {
      icon: 'fa',
      title: 'مرصد قطاع دعم الأعمال',
      desc: 'تم إطلاق "بوابة مرصد قطاع دعم الاعمال" لإضفاء المزيد من الحيوية والفاعلية على إنتاجه ونشاطاته، وليصبح المركز مرجعاً رئيسياً لقطاع الأعمال بمنطقة الرياض خصوصاً والمملكة عموماً'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
