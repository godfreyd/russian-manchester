# This migration comes from spree_multi_vendor (originally 20180904134812)
class CreateSpreeVendors < SpreeExtension::Migration[5.2]
  def change
    create_table :spree_vendors do |t|
      t.string :name
      t.timestamps
    end
    add_index :spree_vendors, :name, unique: true
  end
end
