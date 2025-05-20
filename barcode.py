import frappe
from frappe import _

@frappe.whitelist()
def get_datas():
    frappe.only_for("Desk User")
        
    brands = frappe.get_all('ioi Supplier',filters={"ioistatus":2},fields=["identification","select_image","custom_barcode"],order_by="identification")
    types = frappe.get_all('Cartridge Type',fields=["identification","code","description","barcode"],order_by="description")
    sizes = frappe.get_all('Cartridge Size',fields=["identification","code","description","barcode"],order_by="description")
    models = frappe.get_all('Cartridge Model',fields=["identification","code","description","barcode"],order_by="description")

    return {
        "brands": brands,
        "types": types,
        "sizes": sizes,
        "models": models
    }

@frappe.whitelist()
def find_item(brand,cartridge_type,cartridge_size,cartridge_model):
    frappe.only_for("Desk User")
    filters = {
        "ioistatus": 2,
        "custom_brand": brand,
        "custom_cartridge_type": cartridge_type,
        "custom_cartridge_size": cartridge_size,
        "custom_cartridge_model": cartridge_model
    } 
    items = frappe.get_all('ioi Item', filters=filters, fields=["identification", "attach_thumbnail1", "custom_brand", "custom_cartridge_type", "custom_cartridge_size", "custom_cartridge_state", "barcode_reference"], order_by="identification")

    if len(items) == 1:
        return items[0]
    else:
        return