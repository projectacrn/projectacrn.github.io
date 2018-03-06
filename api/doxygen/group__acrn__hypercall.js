var group__acrn__hypercall =
[
    [ "mmio_request", "group__acrn__hypercall.html#structmmio__request", [
      [ "address", "group__acrn__hypercall.html#a064b968c9880b3f2eb15a6902af455a8", null ],
      [ "direction", "group__acrn__hypercall.html#a5ee5d2ef58edfa75b454de67d6065b38", null ],
      [ "reserved", "group__acrn__hypercall.html#a6068a4375866ddd11ca232cefe1c94e4", null ],
      [ "size", "group__acrn__hypercall.html#af4187e6ed8bde0bfadc5730432677382", null ],
      [ "value", "group__acrn__hypercall.html#ab7720b7852b8fc0c9239fdb98ce2106f", null ]
    ] ],
    [ "pio_request", "group__acrn__hypercall.html#structpio__request", [
      [ "address", "group__acrn__hypercall.html#af78c848dbdd47391cd12c97506764f25", null ],
      [ "direction", "group__acrn__hypercall.html#ab6678a312ecd518ff756ae3c996f64ff", null ],
      [ "reserved", "group__acrn__hypercall.html#ac3f904d7697bab25b57aadd7486e8ec5", null ],
      [ "size", "group__acrn__hypercall.html#a1befbd9866e7eba5693dec3d001787e0", null ],
      [ "value", "group__acrn__hypercall.html#af25af60bff45820d5ffafbf3b15ea58d", null ]
    ] ],
    [ "pci_request", "group__acrn__hypercall.html#structpci__request", [
      [ "bus", "group__acrn__hypercall.html#a2aadc0b5232c4849e4e7ac6fd3d464bb", null ],
      [ "dev", "group__acrn__hypercall.html#af806ad26912aa92883a9466f20def433", null ],
      [ "direction", "group__acrn__hypercall.html#a8daeb6cfa8686b496f0a7ea35d17ff7e", null ],
      [ "func", "group__acrn__hypercall.html#a8f7df06a9c156899ce7aef0597764db4", null ],
      [ "reg", "group__acrn__hypercall.html#af589874f0283c655839d6f8f7ea7b584", null ],
      [ "reserved", "group__acrn__hypercall.html#a9102ebef6413b1a5899ea4bdfbfb10b0", null ],
      [ "size", "group__acrn__hypercall.html#aa8491df28ed5b4e0310e6ed8fe6e4e16", null ],
      [ "value", "group__acrn__hypercall.html#a7f1fc2c1edd7e085c6f53f0528094601", null ]
    ] ],
    [ "vhm_request", "group__acrn__hypercall.html#structvhm__request", [
      [ "client", "group__acrn__hypercall.html#a49b1e5f5583f45fbc93c499c06dd1a3c", null ],
      [ "processed", "group__acrn__hypercall.html#ac1f6dd0c5190bba8cf4e461afdd561c5", null ],
      [ "reqs", "group__acrn__hypercall.html#a3505cf01f6fdc05751f2f4ef6c2aed2a", null ],
      [ "valid", "group__acrn__hypercall.html#a1247623c4b97cfffee71acc5797b09ab", null ]
    ] ],
    [ "vhm_request_buffer", "group__acrn__hypercall.html#structvhm__request__buffer", null ],
    [ "vhm_request.reqs", "group__acrn__hypercall.html#unionvhm__request_8reqs", [
      [ "mmio_request", "group__acrn__hypercall.html#a055bfad48ed26e3b0897b4319c9a3e7d", null ],
      [ "pci_request", "group__acrn__hypercall.html#a99832193f87937bfd25a2d72619dcc6c", null ],
      [ "pio_request", "group__acrn__hypercall.html#a2d485a23d6989b7cc1c3c78c7f2a85ee", null ],
      [ "reserved1", "group__acrn__hypercall.html#aaefb45f89a6b7aa8dfbc2f0df8b66685", null ]
    ] ],
    [ "acrn_create_vm", "group__acrn__hypercall.html#structacrn__create__vm", [
      [ "GUID", "group__acrn__hypercall.html#a4506c331a794329cc1e6bdaf1bce613a", null ],
      [ "reserved", "group__acrn__hypercall.html#a49f3daa44e3780ee6651aacd42f9420a", null ],
      [ "secure_world_enabled", "group__acrn__hypercall.html#a125e7a29952d8561e3d38630d228073b", null ],
      [ "vcpu_num", "group__acrn__hypercall.html#a84763913625c21787d1cd302335b1622", null ],
      [ "vmid", "group__acrn__hypercall.html#ac9671dc6f3a1584ec2b98390f643b80c", null ]
    ] ],
    [ "acrn_create_vcpu", "group__acrn__hypercall.html#structacrn__create__vcpu", [
      [ "pcpu_id", "group__acrn__hypercall.html#a2f17cc8c7fd76bd1e45e07cf46ee9893", null ],
      [ "vcpu_id", "group__acrn__hypercall.html#af9fcc865a05d87b04cc95116090a1ea1", null ]
    ] ],
    [ "acrn_set_ioreq_buffer", "group__acrn__hypercall.html#structacrn__set__ioreq__buffer", [
      [ "req_buf", "group__acrn__hypercall.html#a9d8df33021c9a03f0ad14fc2a872d5f4", null ]
    ] ],
    [ "acrn_irqline", "group__acrn__hypercall.html#structacrn__irqline", [
      [ "intr_type", "group__acrn__hypercall.html#a720e0dca5b5deda730a5e29aaefe5f2c", null ],
      [ "ioapic_irq", "group__acrn__hypercall.html#a08884a0948acdbc2ec4e542d086e5834", null ],
      [ "pic_irq", "group__acrn__hypercall.html#a347929f14121b58c37c2cb8eab2c743b", null ],
      [ "reserved", "group__acrn__hypercall.html#a5a7ab9ebc1cf6ab5aec7249f32bf1b89", null ]
    ] ],
    [ "acrn_msi_entry", "group__acrn__hypercall.html#structacrn__msi__entry", [
      [ "msi_addr", "group__acrn__hypercall.html#a25fdffd75c27045ba11ac753dcf9620a", null ],
      [ "msi_data", "group__acrn__hypercall.html#a03d8bcd0d76a09dbd438b58adacdb772", null ]
    ] ],
    [ "acrn_nmi_entry", "group__acrn__hypercall.html#structacrn__nmi__entry", [
      [ "vcpu_id", "group__acrn__hypercall.html#ae4c9bf7b58f22b27cafe627dbf0632fe", null ]
    ] ],
    [ "acrn_vm_pci_msix_remap", "group__acrn__hypercall.html#structacrn__vm__pci__msix__remap", [
      [ "msi_addr", "group__acrn__hypercall.html#a6d0cffc8182bc2641df8484257bad463", null ],
      [ "msi_ctl", "group__acrn__hypercall.html#a9d5c503d36f0e78ed1b0a13768e90300", null ],
      [ "msi_data", "group__acrn__hypercall.html#a9256ad0a15a6ec6921655440a1170cee", null ],
      [ "msix", "group__acrn__hypercall.html#aaab25b15f687bd82df86fbc81a87ad46", null ],
      [ "msix_entry_index", "group__acrn__hypercall.html#a76dad83ac2a57c79e102b5293d3195d5", null ],
      [ "phys_bdf", "group__acrn__hypercall.html#ab65771693aee436a7c73d35672eb1d67", null ],
      [ "reserved", "group__acrn__hypercall.html#a9c8d1e9f1fd92d6d8ecae6a88c9c4b0f", null ],
      [ "vector_ctl", "group__acrn__hypercall.html#a2e634e529bfabe3c79367e2f86a32d73", null ],
      [ "virt_bdf", "group__acrn__hypercall.html#a762a684fb94f161c32d9916daca66759", null ]
    ] ],
    [ "vm_set_memmap", "group__acrn__hypercall.html#structvm__set__memmap", [
      [ "length", "group__acrn__hypercall.html#a8a832516cc12bfbd8beb5aeb54d83bb6", null ],
      [ "prot", "group__acrn__hypercall.html#a9d13558817ae5ae3c3ce04732afa6238", null ],
      [ "remote_gpa", "group__acrn__hypercall.html#aba2e60b5a779ea62b7cb8dbf92033216", null ],
      [ "reserved", "group__acrn__hypercall.html#a406bc2a701de551aaa9c19b1783a6186", null ],
      [ "type", "group__acrn__hypercall.html#a2bf05366f7f3e08c79ab4a516db65230", null ],
      [ "vm0_gpa", "group__acrn__hypercall.html#ac55f7eef2aaf4e3bb4933525ce08c6fb", null ]
    ] ],
    [ "sbuf_setup_param", "group__acrn__hypercall.html#structsbuf__setup__param", [
      [ "gpa", "group__acrn__hypercall.html#a656907213b393197278e4a29d4cf03fd", null ],
      [ "pcpu_id", "group__acrn__hypercall.html#a97c7601167da22059300426035a5500f", null ],
      [ "sbuf_id", "group__acrn__hypercall.html#af63053d92ab091c9aada73e3bd725720", null ]
    ] ],
    [ "vm_gpa2hpa", "group__acrn__hypercall.html#structvm__gpa2hpa", [
      [ "gpa", "group__acrn__hypercall.html#a8aaa1ab8f7323b537b066eded1fd1d76", null ],
      [ "hpa", "group__acrn__hypercall.html#a0979c0e0aa8523cbff0ce26b9ae44955", null ]
    ] ],
    [ "hc_ptdev_irq", "group__acrn__hypercall.html#structhc__ptdev__irq", [
      [ "is", "group__acrn__hypercall.html#afd4c3cd7f276a8d89c41021046902b29", null ],
      [ "phys_bdf", "group__acrn__hypercall.html#a0f1ddcf761fda99f5fdcffd3f7a46254", null ],
      [ "type", "group__acrn__hypercall.html#ae8cc65c600c21ff17dd6f028a93bf9fa", null ],
      [ "virt_bdf", "group__acrn__hypercall.html#a71f2db0a4fa3581ab16f3f68f66eb560", null ]
    ] ],
    [ "hc_ptdev_irq.is", "group__acrn__hypercall.html#unionhc__ptdev__irq_8is", [
      [ "intx", "group__acrn__hypercall.html#a0acafcc8225cd779ddb9790b2e2a5f47", null ],
      [ "msix", "group__acrn__hypercall.html#a8fee7e6bee0292a2fa8265efcdaed482", null ]
    ] ],
    [ "hc_ptdev_irq.is.intx", "group__acrn__hypercall.html#structhc__ptdev__irq_8is_8intx", [
      [ "phys_pin", "group__acrn__hypercall.html#a4951d91c03a0abfef1ac0168ef08b2ef", null ],
      [ "pic_pin", "group__acrn__hypercall.html#a4c3f1e78dcd00a6bf4455b762400402a", null ],
      [ "virt_pin", "group__acrn__hypercall.html#a50b5c194d8b4828bd3be4ad3ce2c252b", null ]
    ] ],
    [ "hc_ptdev_irq.is.msix", "group__acrn__hypercall.html#structhc__ptdev__irq_8is_8msix", [
      [ "vector_cnt", "group__acrn__hypercall.html#a684688064e4a37535bfc4b2c204a2342", null ]
    ] ],
    [ "hc_api_version", "group__acrn__hypercall.html#structhc__api__version", [
      [ "major_version", "group__acrn__hypercall.html#a1936440156690aecebd15d6a5254c002", null ],
      [ "minor_version", "group__acrn__hypercall.html#ad9c1f45eae56a4b04222852c5d1dc4a5", null ]
    ] ],
    [ "ACRN_INTR_TYPE_IOAPIC", "group__acrn__hypercall.html#ga973c52a426bda13b719315751edeba2b", null ],
    [ "ACRN_INTR_TYPE_ISA", "group__acrn__hypercall.html#ga4bc0cc0456bfd0a736a9619a29a066dc", null ],
    [ "GUEST_CFG_OFFSET", "group__acrn__hypercall.html#ga4a6721b10d7813cd32c6d4493b15c6ae", null ],
    [ "hcall_assert_irqline", "group__acrn__hypercall.html#ga3b309f6aaeb38028bb31244c1793fb64", null ],
    [ "hcall_assign_ptdev", "group__acrn__hypercall.html#ga259fe9d58e14072a59fc5adc439e86fd", null ],
    [ "hcall_create_vcpu", "group__acrn__hypercall.html#gac2cd44d8475db820883f2b0bd2b671fd", null ],
    [ "hcall_create_vm", "group__acrn__hypercall.html#ga91c4de2e749a381433e105dd0eccbb13", null ],
    [ "hcall_deassert_irqline", "group__acrn__hypercall.html#gafc3a792b5139a5c4ead482d699820ac6", null ],
    [ "hcall_deassign_ptdev", "group__acrn__hypercall.html#gad0594fb4a87524c3037f78ec08d8b218", null ],
    [ "hcall_destroy_vm", "group__acrn__hypercall.html#ga9315c7c2844d35f787b9fe5079465236", null ],
    [ "hcall_get_api_version", "group__acrn__hypercall.html#ga700411143c8bcd4cb9b14289962e514d", null ],
    [ "hcall_gpa_to_hpa", "group__acrn__hypercall.html#gabaacef742ac3d8dd801d2a43e172c785", null ],
    [ "hcall_inject_msi", "group__acrn__hypercall.html#ga9c87151173130bdd81e8fc145bfaaa7f", null ],
    [ "hcall_notify_req_finish", "group__acrn__hypercall.html#gaff743b010bb8f97fb0e2c3afce63b7d5", null ],
    [ "hcall_pause_vm", "group__acrn__hypercall.html#ga590e32ed11fcf7082e4cc3a0eb15f2a5", null ],
    [ "hcall_pulse_irqline", "group__acrn__hypercall.html#gac24c98114b6ca7e5f78b7bdd20ec7e41", null ],
    [ "hcall_remap_pci_msix", "group__acrn__hypercall.html#ga7c25fc70e9b37032ee5a24d533179a4a", null ],
    [ "hcall_reset_ptdev_intr_info", "group__acrn__hypercall.html#gac67d828207a74ded8c6312ab45501192", null ],
    [ "hcall_resume_vm", "group__acrn__hypercall.html#gadb392d9252742e3884216e678348e200", null ],
    [ "hcall_set_ioreq_buffer", "group__acrn__hypercall.html#gaa31c6d58fdf2e03e21efd9a5bf0c962c", null ],
    [ "hcall_set_ptdev_intr_info", "group__acrn__hypercall.html#gad4f2c396fa7506468b585e13966374c6", null ],
    [ "hcall_set_vm_memmap", "group__acrn__hypercall.html#gaf5ed9c0d77ad474be0bf9b28f9c32c55", null ],
    [ "hcall_setup_sbuf", "group__acrn__hypercall.html#ga25a553434371eeb589429e67fd5fc250", null ]
];