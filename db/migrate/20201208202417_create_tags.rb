class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      t.string :scaffold
      t.string :name
      t.string :color
      t.timestamps
    end
  end
end
