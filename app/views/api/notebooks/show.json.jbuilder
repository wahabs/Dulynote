json.extract!(@notebook, :id, :title, :ord, :user_id)
json.notes do
  json.array!(@notebook.notes) do |note|
    json.extract!(note, :id, :title, :body, :ord, :notebook_id)

    json.tags do
      json.array!(note.tags) do |tag|
        json.extract!(tag, :id, :label)
      end
    end

  end
end
